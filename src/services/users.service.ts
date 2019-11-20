import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { User } from '../interfaces/user.interface';
import CONSTANTS from '../utils/constants';

@Injectable()
export class UsersService {
  constructor(
    @Inject(CONSTANTS.MODEL_USER)
    private readonly userModel: Model<User>,
  ) {}

  async findOneByEmail(email: string): Promise<User | undefined> {
    return await this.userModel.findOne({ email });
  }
}
