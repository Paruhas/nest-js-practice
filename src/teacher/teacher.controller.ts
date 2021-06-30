import { Controller, Get } from '@nestjs/common';

@Controller('teacher')
export class TeacherController {
  @Get()
  findAll(): string {
    return 'all teacher data';
  }
}
