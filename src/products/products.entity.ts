import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Products {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column()
  description: string;

  @Column()
  image: string;

  @Column({ nullable: true })
  discount: number;

  @Column()
  sale_count: number;

  @Column()
  category_id: number;

  @Column()
  brand_id: number;

  @CreateDateColumn() // Tự động lưu thời gian tạo
  created_at: Date;
}
