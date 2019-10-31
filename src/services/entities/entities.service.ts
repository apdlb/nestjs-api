import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Entity } from '../../database/entities/entity.entity';
import { CreateEntityDto } from '../../dto/create-entity.dto';

@Injectable()
export class EntitiesService {
  constructor(
    @InjectRepository(Entity)
    private readonly entityRepository: Repository<Entity>,
  ) {}

  async find(): Promise<Entity[]> {
    return await this.entityRepository.find();
  }

  async create(entityDto: CreateEntityDto): Promise<Entity> {
    const entity = new Entity();
    entity.nick = entityDto.nick;
    entity.entity = entityDto.entity;

    return await this.entityRepository.save(entity);
  }

  async findOne(id: number): Promise<Entity> {
    return await this.entityRepository.findOne(id);
  }

  async update(id: number, entityDto: CreateEntityDto): Promise<Entity> {
    const entity = await this.entityRepository.findOne(id);
    entity.nick = entityDto.nick;
    entity.entity = entityDto.entity;

    return await this.entityRepository.save(entity);
  }

  async delete(id: number): Promise<any> {
    return await this.entityRepository.delete(id);
  }
}
