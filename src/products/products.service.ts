import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Products } from './products.entity';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Products)
    private productsRepository: Repository<Products>,
  ) {}

  async findNewArrivals(): Promise<Products[]> {
    // created_at để sắp xếp
    return this.productsRepository.find({
      order: { created_at: 'DESC' },
      take: 5,
    });
  }

  async findTopSellers(): Promise<Products[]> {
    // Xác định sản phẩm bán chạy nhất
    return this.productsRepository.find({
      order: {
        sale_count: 'DESC', // Sắp xếp theo số lượng bán
      },
      take: 5,
    });
  }

  async findProductById(id: number): Promise<Products> {
    return this.productsRepository.findOne({ where: { id } });
  }

  async findRelatedProducts(id: number): Promise<Products[]> {
    // Logic để lấy sản phẩm liên quan
    return this.productsRepository.find({ where: { category_id: id } });
  }
}
