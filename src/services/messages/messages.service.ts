import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { Message } from '../../database/entities/message.entity';
import { CreateMessageDto } from '../../dto/create-message.dto';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async find(): Promise<Message[]> {
    return await this.messageRepository.find();
  }

  async create(messageDto: CreateMessageDto): Promise<Message> {
    const message = new Message();
    message.nick = messageDto.nick;
    message.message = messageDto.message;

    return await this.messageRepository.save(message);
  }

  async findOne(id: number): Promise<Message> {
    return await this.messageRepository.findOne(id);
  }

  async update(id: number, messageDto: CreateMessageDto): Promise<Message> {
    const message = await this.messageRepository.findOne(id);
    message.nick = messageDto.nick;
    message.message = messageDto.message;

    return await this.messageRepository.save(message);
  }

  async delete(id: number): Promise<any> {
    return await this.messageRepository.delete(id);
  }
}
