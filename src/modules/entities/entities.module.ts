import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { EntitiesController } from '../../controllers/entities/entities.controller';
import { EntitySchema } from '../../database/schemas/entity.schema';
import { EntitiesService } from '../../services/entities/entities.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Entity', schema: EntitySchema }]),
  ],
  controllers: [EntitiesController],
  providers: [EntitiesService],
})
export class EntitiesModule {}
