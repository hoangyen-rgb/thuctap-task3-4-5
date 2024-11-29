import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { ProductsModule } from './products/products.module';
import { Users } from './users/users.entity';
import { Products } from './products/products.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'thuctap',
      entities: [Users, Products],
      synchronize: true,
    }),
    UsersModule,
    ProductsModule,
  ],
})
export class AppModule {}
