import { Module } from '@nestjs/common';

import { EntitiesController } from '../controllers/entities.controller';
import { entitiesProviders } from '../providers/entities.providers';
import { EntitiesService } from '../services/entities.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  controllers: [EntitiesController],
  providers: [EntitiesService, ...entitiesProviders],
})
export class EntitiesModule {}
