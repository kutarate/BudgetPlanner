import { Field, Float, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Expense {
  @Field(type => Int)
  id: number;

  @Field(type => Int)
  userId: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field(type => Float)
  amount: number;
}
