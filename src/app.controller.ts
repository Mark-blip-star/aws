import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }
}

// Access key
// Secret access key

// AKIAZ3ZI547BWWJEXI46

// odrqojteIggqnxA0gMzSOkHJ2/Qi62aFC0741zcx
