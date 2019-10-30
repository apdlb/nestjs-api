import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { MessagesController } from './controllers/messages/messages.controller';
import { MessagesService } from './services/messages/messages.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'db',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'api',
      entities: [__dirname + '/**/**.entity{.ts,.js}'],
      synchronize: true,
    }),
  ],
  controllers: [MessagesController],
  providers: [MessagesService],
})
export class AppModule {}
