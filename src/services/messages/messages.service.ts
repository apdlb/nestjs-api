import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from 'src/database/entities/message.entity';
import { CreateMessageDto } from 'src/dto/create-message.dto';
import { Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messageRepository: Repository<Message>,
  ) {}

  async getAll() {
    return await this.messageRepository.find();
  }

  async create(messageDto: CreateMessageDto) {
    const message = new Message();
    message.nick = messageDto.nick;
    message.message = messageDto.message;

    return await this.messageRepository.save(message);
  }

  async get(id: number) {
    return await this.messageRepository.findOne(id);
  }

  async update(id: number, messageDto: CreateMessageDto) {
    const message = await this.messageRepository.findOne(id);
    message.nick = messageDto.nick;
    message.message = messageDto.message;

    return await this.messageRepository.save(message);
  }

  async delete(id: number) {
    return await this.messageRepository.delete(id);
  }
}
