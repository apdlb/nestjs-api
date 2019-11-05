import { Inject, Injectable } from '@nestjs/common';
import { PaginateModel, PaginateResult } from 'mongoose';

import { CreateEntityDto } from '../../dto/create-entity.dto';
import { Entity } from '../../interfaces/entity.interface';
import CONSTANTS from '../../utils/constants';

@Injectable()
export class EntitiesService {
  constructor(
    @Inject(CONSTANTS.MODEL_ENTITY)
    private readonly entityModel: PaginateModel<Entity>,
  ) {}

  async find(query = {} as any): Promise<PaginateResult<Entity>> {
    const { page, pageSize, sort, order, ...filter } = query;

    const customFilter = filter;
    // Like operator
    if (customFilter.field1) {
      customFilter.field1 = { $regex: `.*${filter.field1}.*` };
    }

    const options = {} as any;
    if (sort && order) {
      options.sort = { [sort]: order };
    }

    let call;
    if (page && pageSize) {
      options.page = page;
      options.limit = pageSize;

      call = this.entityModel.paginate(customFilter, options);
    } else {
      call = this.entityModel.find(customFilter, options);
    }

    return await call;
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
