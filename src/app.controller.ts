import { Controller, Get, Next, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { NextFunction, Request, Response } from 'express';

import { AuthService } from './services/auth.service';

@Controller()
export class AppController {
  // constructor(private readonly authService: AuthService) {}
  // @UseGuards(AuthGuard('local'))
  // @Post('auth/login')
  // async login(
  //   @Req() req: Request,
  //   @Res() res: Response,
  //   @Next() next: NextFunction,
  // ) {
  //   return this.authService
  //     .login(req.user)
  //     .then(data => res.json({ data }))
  //     .catch(err => next(err));
  // }
  // @UseGuards(AuthGuard('jwt'))
  // @Get('auth')
  // getProfile(@Req() req) {
  //   return { data: req.user };
  // }
}
