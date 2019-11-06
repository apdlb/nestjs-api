import { ParseIntPipe, UseGuards } from '@nestjs/common';
import { Args, Mutation, Query, Resolver, Subscription } from '@nestjs/graphql';
import { PubSub } from 'graphql-subscriptions';

import { CreateEntityDto } from '../dto/create-entity.dto';
import { Entity } from '../graphql';
import { EntitiesService } from '../services/entities.service';

@Resolver()
export class EntitiesResolvers {
  constructor(private readonly entitiesService: EntitiesService) {}

  @Query()
  async getEntities(): Promise<Entity[]> {
    return await this.entitiesService.find();
  }

  @Query()
  async getEntitiesPaginated(@Args('filter') filter: any): Promise<any> {
    return await this.entitiesService.find(filter);
  }

  @Mutation()
  async createEntity(
    @Args('fields') createEntityDto: CreateEntityDto,
  ): Promise<Entity> {
    return await this.entitiesService.create(createEntityDto);
  }

  @Query()
  async getEntity(
    @Args('id')
    id: string,
  ): Promise<Entity> {
    return await this.entitiesService.findOneById(id);
  }

  @Mutation()
  async updateEntity(
    @Args('id') id: string,
    @Args('fields') createEntityDto: CreateEntityDto,
  ): Promise<Entity> {
    return await this.entitiesService.update(id, createEntityDto);
  }

  @Mutation()
  async deleteEntity(@Args('id') id: string): Promise<any> {
    return await this.entitiesService.delete(id);
  }
}
