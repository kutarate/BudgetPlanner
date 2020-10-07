import { NotFoundException, UseGuards } from '@nestjs/common';
import { Args, Int, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'apollo-server-express';
import { GqlJwtAuthGuard } from 'src/auth/guards/gql-jwt.guard';
import { CurrentUser } from 'src/common/decorators/current-user.decorator';
import { User } from 'src/users/users.service';
import { AddExpenseArgs } from './dto/add-expense.args';
import { Expense } from './expense.model';
import { ExpensesService } from './expenses.service';

const pubSub = new PubSub();

@UseGuards(GqlJwtAuthGuard)
@Resolver(of => Expense)
export class ExpensesResolver {
  constructor(private readonly expensesService: ExpensesService) {}

  @Query(returns => Expense)
  async expense(@Args({ name: 'id', type: () => Int }) id: number): Promise<Expense> {
    const expense = await this.expensesService.findOneById(id);
    if (!expense) {
      throw new NotFoundException(id);
    }
    return expense;
  }

  @Query(returns => [Expense])
  expenses(@Args({ name: 'userId', type: () => Int }) userId: number): Promise<Expense[]> {
    return this.expensesService.findAllForUser(userId);
  }

  @Mutation(returns => Expense)
  async addExpense(
    @Args('addExpenseData') addExpenseData: AddExpenseArgs,
    @CurrentUser() user: User,
  ): Promise<Expense> {
    const expense = await this.expensesService.create(user.userId, addExpenseData);
    pubSub.publish('expenseAdded', { expenseAdded: expense });
    return expense;
  }

  @Mutation(returns => Boolean)
  async removeExpense(@Args({ name: 'id', type: () => Int }) id: number) {
    return this.expensesService.remove(id);
  }

  @Subscription(returns => Expense)
  expenseAdded() {
    return pubSub.asyncIterator('expenseAdded');
  }
}
