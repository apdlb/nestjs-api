import { Body, Controller, Delete, Get, HttpStatus, Next, Param, Post, Put, Req, Res } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

import { CreateMessageDto } from '../../dto/create-message.dto';
import { MessagesService } from '../../services/messages/messages.service';

@Controller('messages')
export class MessagesController {
  constructor(private messagesService: MessagesService) {}

  @Get()
  getAll(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
  ) {
    this.messagesService
      .getAll()
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  @Post()
  create(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
    @Body() createMessageDto: CreateMessageDto,
  ) {
    this.messagesService
      .create(createMessageDto)
      .then(data => res.status(HttpStatus.CREATED).json({ data }))
      .catch(err => next(err));
  }

  @Get(':id')
  get(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
    @Param('id') id: number,
  ) {
    this.messagesService
      .get(id)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  @Put(':id')
  update(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
    @Param('id') id: number,
    @Body() updateMessageDto: CreateMessageDto,
  ) {
    this.messagesService
      .update(id, updateMessageDto)
      .then(data => res.json({ data }))
      .catch(err => next(err));
  }

  @Delete(':id')
  delete(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction,
    @Param('id') id: number,
  ) {
    this.messagesService
      .delete(id)
      .then(() => res.status(HttpStatus.NO_CONTENT).json())
      .catch(err => next(err));
  }
}
