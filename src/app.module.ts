import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';

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
      installSubscriptionHandlers: true,
    }),
    EntitiesModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
