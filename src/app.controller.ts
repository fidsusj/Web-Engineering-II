import { ConflictException, Controller, Get, HttpException, HttpStatus, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('greet')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get(':name')
  getHello(@Param('name') name): string {
    return `Hello ${name}`;
  }

  @Post(':name')
  getException(@Param('name') name): never {
    //throw new ConflictException();
    throw new HttpException({text: 'Something went wrong'}, HttpStatus.CONFLICT);
  }
}
