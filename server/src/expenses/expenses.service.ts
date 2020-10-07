import { Injectable } from '@nestjs/common';
import { AddExpenseArgs } from './dto/add-expense.args';
import { Expense } from './expense.model';

@Injectable()
export class ExpensesService {
  private readonly expenses: Expense[];

  constructor() {
    this.expenses = [{
      id: 1,
      userId: 1,
      name: 'Pizza',
      amount: -30,
    }, {
      id: 2,
      userId: 1,
      name: 'Burger',
      amount: -20,
    }, {
      id: 3,
      userId: 1,
      name: 'Work',
      amount: 100,
    }, {
      id: 4,
      userId: 2,
      name: 'Love',
      amount: -150,
    }];
  }

  async findAllForUser(userId: number): Promise<Expense[]> {
    return this.expenses.filter(expense => expense.userId === userId);
  }

  async findOneById(id: number) {
    return this.expenses.find(expense => expense.id === id);
  }

  async create(userId: number, data: AddExpenseArgs): Promise<Expense> {
    const expense: Expense = {
      id: this.expenses.length,
      userId,
      amount: data.amount,
      name: data.name,
      description: data.description,
    };

    this.expenses.push(expense);
    return { ...expense };
  }

  async remove(id: number): Promise<boolean> {
    const index = this.expenses.findIndex(expense => expense.id === id);
    if (index !== -1) {
      this.expenses.splice(index, 1);
      return true;
    }
    return false;
  }
}
