import { Body, Controller, Delete, Get, HttpStatus, Next, Param, Post, Put, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { CreateEntityDto } from '../../dto/create-entity.dto';
import { EntitiesService } from '../../services/entities/entities.service';

@Controller('entities')
export class EntitiesController {
  constructor(private entitiesService: EntitiesService) {}

  @Get()
  find(@Res() res: Response, @Next() next: NextFunction) {
    this.entitiesService
      .find()
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  @Post()
  create(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Body() createEntityDto: CreateEntityDto,
  ) {
    this.entitiesService
      .create(createEntityDto)
      .then(data => res.status(HttpStatus.CREATED).json({ data }))
      .catch(err => next(err));
  }

  @Get(':id')
  findOne(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Param('id') id: number,
  ) {
    this.entitiesService
      .findOne(id)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  @Put(':id')
  update(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Param('id') id: number,
    @Body() updateEntityDto: CreateEntityDto,
  ) {
    this.entitiesService
      .update(id, updateEntityDto)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  @Delete(':id')
  delete(
    @Res() res: Response,
    @Next() next: NextFunction,
    @Param('id') id: number,
  ) {
    this.entitiesService
      .delete(id)
      .then(() => res.status(HttpStatus.NO_CONTENT).json())
      .catch(err => next(err));
  }
}
