import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({description: "User's name", nullable: false})
  name: string

  @Field({description: "User's email", nullable: false})
  email: string

  @Field({description: "User's age", nullable: false})
  age: number
}
