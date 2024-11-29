import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';
import { Products } from './products.entity';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get('new-arrivals')
  async getNewArrivals(): Promise<Products[]> {
    return this.productsService.findNewArrivals();
  }

  @Get('top-sellers')
  async getTopSellers(): Promise<Products[]> {
    return this.productsService.findTopSellers();
  }

  @Get(':id')
  async getProductById(@Param('id') id: number): Promise<Products> {
    return this.productsService.findProductById(id);
  }

  @Get('related/:id')
  async getRelatedProducts(@Param('id') id: number): Promise<Products[]> {
    return this.productsService.findRelatedProducts(id);
  }
}
