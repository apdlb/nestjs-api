import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AuthModule } from './modules/auth/auth.module';
import { DatabaseModule } from './modules/database/database.module';
import { EntitiesModule } from './modules/entities/entities.module';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [DatabaseModule, AuthModule, UsersModule, EntitiesModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
