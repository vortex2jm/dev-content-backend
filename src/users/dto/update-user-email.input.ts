import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserEmailInput extends PartialType(CreateUserInput) {
  @Field(() => Int, {nullable: false})
  id: number;

  @Field({nullable: false})
  email: string
}
