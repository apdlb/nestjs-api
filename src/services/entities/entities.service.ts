import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Entity } from 'src/interfaces/entity.interface';

import { CreateEntityDto } from '../../dto/create-entity.dto';

@Injectable()
export class EntitiesService {
  constructor(
    @InjectModel('Entity')
    private readonly entityModel: Model<Entity>,
  ) {}

  async find(): Promise<Entity[]> {
    return await this.entityModel.find();
  }

  async create(entityDto: CreateEntityDto): Promise<Entity> {
    return await this.entityModel.create(entityDto);
  }

  async findOne(id: number): Promise<Entity> {
    return await this.entityModel.findById(id);
  }

  async update(id: number, entityDto: CreateEntityDto): Promise<Entity> {
    return await this.entityModel.findByIdAndUpdate(id, entityDto, {
      new: true,
    });
  }

  async delete(id: number): Promise<any> {
    return await this.entityModel.findByIdAndDelete(id);
  }
}
