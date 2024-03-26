import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Car {
  @PrimaryGeneratedColumn('uuid')
  id: number;

  @Column()
  licenseNumber: string;

  @Column()
  brand: string;

  @Column()
  series: string;

  @Column({ nullable: true })
  remark: string;
}
