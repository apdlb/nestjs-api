import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { compareSync } from 'bcryptjs';

import { UsersService } from './users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findOneByEmail(email);
    if (user && compareSync(password, user.password)) {
      const { password, ...result } = user;

      return result;
    }

    return null;
  }

  async login(user: any) {
    const payload = { sub: user._id, email: user.email };

    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
