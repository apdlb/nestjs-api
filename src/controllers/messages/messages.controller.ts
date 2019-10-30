import { Body, Controller, Delete, Get, Post, Put } from '@nestjs/common';

import { CreateMessageDto } from '../../dto/create-message.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  getAll() {
    return 'list of messages';
  }

  @Post()
  create(@Body() createMessageDto: CreateMessageDto) {
    return 'message created';
  }

  @Get(':id')
  get() {
    return 'get message';
  }

  @Put(':id')
  update(@Body() updateMessageDto: CreateMessageDto) {
    return 'message updated';
  }

  @Delete(':id')
  delete() {
    return 'message deleted';
  }
}
