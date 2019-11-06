import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as GraphQLJSON from 'graphql-type-json';

import { AppController } from './app.controller';
import { AuthModule } from './modules/auth.module';
import { DatabaseModule } from './modules/database.module';
import { EntitiesModule } from './modules/entities.module';
import { UsersModule } from './modules/users.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: { JSON: GraphQLJSON },
    }),
    AuthModule,
    UsersModule,
    EntitiesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
