import { Module } from '@nestjs/common';

import { usersProviders } from '../../providers/users.providers';
import { UsersService } from '../../services/users/users.service';
import { DatabaseModule } from '../database/database.module';

@Module({
  imports: [DatabaseModule],
  providers: [UsersService, ...usersProviders],
  exports: [UsersService],
})
export class UsersModule {}
