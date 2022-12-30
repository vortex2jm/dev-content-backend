import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
// import { GraphQLError } from 'graphql';
import { Repository } from 'typeorm';
import { CreateUserInput } from './dto/create-user.input';
import { User } from './entities/user.entity';
// import { UpdateUserInput } from './dto/update-user-email.input';

@Injectable()
export class UsersService {

  constructor(
    @InjectRepository(User)
    private userRepo: Repository<User>
  ){}
  
  async create(createUserInput: CreateUserInput): Promise<any> {
    return await this.userRepo.save(createUserInput); 
  }

  async findAll(): Promise<User[]> {
    return await this.userRepo.find({relations: ["posts"]});
  }

  async findOne(id: number): Promise<User> {
    return await this.userRepo.findOne({where: {id: id}, relations: ["posts"]});
  }

  async remove(id: number): Promise<User> {
    const user: User = await this.userRepo.findOne({where: {id: id}});
    if(!user){
      // throw new GraphQLError("Este usuário não está cadastrado");
      return null;
    }
    await this.userRepo.delete(id);
    return user;
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }
}
