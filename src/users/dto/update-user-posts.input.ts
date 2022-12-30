import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';

@InputType()
export class UpdateUserPostsInput extends PartialType(CreateUserInput) {
  @Field(() => Int, {nullable: false})
  id: number;

  @Field(type => Post, {nullable: false})
  post: Post
}
