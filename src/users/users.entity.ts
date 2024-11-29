import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('users') // Tên bảng trong cơ sở dữ liệu
export class Users {
  @PrimaryGeneratedColumn()
  id: number; // Mã người dùng, tự động tăng

  @Column({ unique: true }) // Đảm bảo tên người dùng là duy nhất
  username: string; // Tên đăng nhập

  @Column()
  password: string; // Mật khẩu

  @Column()
  firstname: string; // Tên

  @Column()
  lastname: string; // Họ

  @Column({ nullable: true })
  avatar: string; // Ảnh đại diện (tùy chọn)

  @Column({ nullable: true })
  phone_number: string; // Số điện thoại (tùy chọn)

  @Column({ unique: true }) // Đảm bảo email là duy nhất
  email: string; // Địa chỉ email

  @Column({ nullable: true })
  address: string; // Địa chỉ (tùy chọn)
}
