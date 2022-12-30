import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { UsersService } from 'src/users/users.service';
import { Repository } from 'typeorm';
import { CreatePostArgs } from './dto/create-post.args';
import { Post } from './entities/post.entity';

@Injectable()
export class PostsService {

  constructor(
    @InjectRepository(Post)
    private postRepo: Repository<Post>,
    private readonly userServices: UsersService
  ){}

  async create(createPostArgs: CreatePostArgs): Promise<Post> {
    const user: User = await this.userServices.findOne(createPostArgs.userId)
    const post = {
      message: createPostArgs.message,
      user: user
    }
    return this.postRepo.save(post);
  }

  async findAll() {
    return await this.postRepo.find({relations: ["user"]});
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} post`;
  // }
  
  // remove(id: number) {
  //   return `This action removes a #${id} post`;
  // }
}
