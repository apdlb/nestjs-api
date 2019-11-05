import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { CreateEntityDto } from '../dto/create-entity.dto';
import { Entity } from '../graphql';
import { EntitiesService } from '../services/entities.service';

@Resolver('Entity')
export class EntitiesResolvers {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Query('getEntities')
  async find() {
    return await this.entitiesService.find();
  }

  @Query('getEntity')
  async findOneById(
    @Args('id')
    id: string,
  ): Promise<Entity> {
    return await this.entitiesService.findOneById(id);
  }

  @Mutation('createEntity')
  async create(
    @Args('createEntityInput') createEntityDto: CreateEntityDto,
  ): Promise<Entity> {
    return await this.entitiesService.create(createEntityDto);
  }
}
