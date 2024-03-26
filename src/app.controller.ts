import { Controller, Get, Post, Put, Delete } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private appService: AppService) {}

  @Get()
  getHello(): string {
    console.log('hello');
    return this.appService.getHello();
  }

  @Get('test')
  getHello2(): string {
    return this.appService.getHello();
  }

  @Post()
  create(): string {
    return 'This action adds a new cat';
  }
}
