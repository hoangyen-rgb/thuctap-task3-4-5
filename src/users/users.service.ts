import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Users)
    private usersRepository: Repository<Users>,
  ) {}

  async create(userData: Partial<Users>): Promise<Users> {
    const user = this.usersRepository.create(userData);
    return this.usersRepository.save(user);
  }

  async findOne(username: string): Promise<Users | undefined> {
    return this.usersRepository.findOne({ where: { username } });
  }

  async validateUser(
    username: string,
    password: string,
  ): Promise<Users | null> {
    const user = await this.findOne(username);
    if (user && user.password === password) {
      return user;
    }
    return null;
  }
}
