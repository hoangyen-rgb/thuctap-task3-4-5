import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { Users } from './users.entity';

@Controller('auth')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('register')
  async register(@Body() userData: Partial<Users>): Promise<Users> {
    return this.usersService.create(userData);
  }

  @Post('login')
  async login(@Body() body: { username: string; password: string }) {
    const user = await this.usersService.validateUser(
      body.username,
      body.password,
    );
    if (user) {
      return { message: 'Login successful', user };
    }
    return { message: 'Invalid credentials' };
  }
}
