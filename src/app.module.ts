import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import * as GraphQLJSON from 'graphql-type-json';

import { AppController } from './app.controller';
import { DatabaseModule } from './modules/database.module';
import { EntitiesModule } from './modules/entities.module';

@Module({
  imports: [
    DatabaseModule,
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      resolvers: { JSON: GraphQLJSON },
    }),
    EntitiesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
