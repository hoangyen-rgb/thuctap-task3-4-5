import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Users } from './users.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Users])], // Đảm bảo rằng User được khai báo ở đây
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Xuất UsersService nếu cần sử dụng ở module khác
})
export class UsersModule {}
