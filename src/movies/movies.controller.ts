import { Controller, Get } from '@nestjs/common';

@Controller('movies')
export class MoviesController {
  @Get('/as')
  getAll() {
    return 'This will return movies222';
  }
}
