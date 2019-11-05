import { Module } from '@nestjs/common';

import { entitiesProviders } from '../providers/entities.providers';
import { EntitiesResolvers } from '../resolvers/entities.resolvers';
import { EntitiesService } from '../services/entities.service';
import { DatabaseModule } from './database.module';

@Module({
  imports: [DatabaseModule],
  providers: [EntitiesResolvers, EntitiesService, ...entitiesProviders],
})
export class EntitiesModule {}
