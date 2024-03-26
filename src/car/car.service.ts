import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}
  create(createCarDto: CreateCarDto) {
    return this.carRepository.create(createCarDto);
  }

  findAll() {
    return this.carRepository.find();
  }

  findOne(id: number) {
    return this.carRepository.findOneBy({ id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.carRepository.update(id, updateCarDto);
  }

  remove(id: number) {
    return this.carRepository.delete(id);
  }
}
