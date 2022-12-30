import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { PostsService } from './posts.service';
import { Post } from './entities/post.entity';
// import { CreatePostInput } from './dto/create-post.input';
import { CreatePostArgs } from './dto/create-post.args';

@Resolver(() => Post)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Mutation(() => Post)
  async createPost(@Args() args: CreatePostArgs) {
    return await this.postsService.create(args);
  }

  @Query(() => [Post], { name: 'posts' })
  async findAll() {
    return await this.postsService.findAll();
  }

  // @Query(() => Post, { name: 'post' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.postsService.findOne(id);
  // }

  // @Mutation(() => Post)
  // removePost(@Args('id', { type: () => Int }) id: number) {
  //   return this.postsService.remove(id);
  // }
}
