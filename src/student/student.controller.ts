import { Controller, Get, Query, Request } from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(
    @Query() { id },
    @Request() req,
  ): {
    students: { id: number; name: string; level: number }[];
  } {
    console.log(id);
    return this.studentService.getStudent(req, id);
  }

  @Get('/:id')
  getStudentById(@Request() req) {
    return this.studentService.getStudentById(req);
  }
}
