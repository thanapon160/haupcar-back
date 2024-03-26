import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  licenseNumber: string;

  @Column()
  remark: string;

  @Column()
  brand: string;

  @Column()
  series: string;
}
