import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { join } from 'node:path';
import { UsersModule } from './users/users.module';
import { PostsModule } from './posts/posts.module';
import typeormConfig from './config/typeorm.config';

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: join(process.cwd(), './src/schema.gql'),
      playground: false,
      plugins: [ApolloServerPluginLandingPageLocalDefault()],
      // include: [Any module] This is include is to add another endpoint
      // sortSchema: true,
      // debug: true,
      // playground: false,
    }),
    TypeOrmModule.forRoot(typeormConfig()),
    UsersModule,
    PostsModule,
  ]
})
export class AppModule {}
