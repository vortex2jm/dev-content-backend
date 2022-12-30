import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Post } from 'src/posts/entities/post.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity({name: "Users"})
export class User {

  @Field(() => Int, { description: 'User primary ID' })
  @PrimaryGeneratedColumn()
  id: number

  @Field({description: "User's name"})
  @Column()
  name: string

  @Field({description: "User's email"})
  @Column()
  email: string

  @Field({description: "User's age"})
  @Column()
  age: number

  @Field(type => [Post], {description: "User's posts", nullable: true})
  @OneToMany(()=> Post, post => post.user)
  posts: Post[]
}

// GraphQL and TyepeORM entity at the same time
