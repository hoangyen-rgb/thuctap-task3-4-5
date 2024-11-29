import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { Products } from './products.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Products])], // Khai báo Product ở đây
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService], // Xuất ProductsService nếu cần sử dụng ở module khác
})
export class ProductsModule {}
