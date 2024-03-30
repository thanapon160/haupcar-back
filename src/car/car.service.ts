import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { UpdateCarDto } from './dto/update-car.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Car } from './entities/car.entity';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CarService {
  constructor(
    @InjectRepository(Car)
    private readonly carRepository: Repository<Car>,
  ) {}
  create(createCarDto: CreateCarDto) {
    return this.carRepository.save({
      ...createCarDto,
      id: uuidv4(),
    });
  }

  findAll() {
    return this.carRepository.find();
  }

  findOne(id: string) {
    return this.carRepository.findOneBy({ id });
  }

  update(id: string, updateCarDto: UpdateCarDto) {
    return this.carRepository.update(id, updateCarDto);
  }

  remove(id: string) {
    return this.carRepository.delete(id);
  }
}
