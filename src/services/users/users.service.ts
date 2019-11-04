import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { User } from '../../interfaces/user.interface';

export type User = any;

@Injectable()
export class UsersService {
  constructor(
    @InjectModel('User')
    private readonly userModel: Model<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | undefined> {
    const users = await this.userModel.find();
    console.log(users);
    return await this.userModel.findOne({ email });
  }
}
