import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { EntitiesController } from '../../controllers/entities/entities.controller';
import { Entity } from '../../database/entities/entity.entity';
import { EntitiesService } from '../../services/entities/entities.service';

@Module({
  imports: [TypeOrmModule.forFeature([Entity])],
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
