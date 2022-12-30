import { Field, Int, ObjectType } from '@nestjs/graphql';
import { User } from 'src/users/entities/user.entity';
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name:"Posts"})
export class Post {

  @Field(type => Int, {nullable: false ,description: "post Id"})
  @PrimaryGeneratedColumn()
  id: number

  @Field({nullable: false ,description: "post text"})
  @Column()
  message: string

  @Field(type => User, {description: "post owner" ,nullable: false})
  @ManyToOne(() => User, user => user.posts, {nullable: false})
  user: User
}
