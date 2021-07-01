import {
  Controller,
  Delete,
  Get,
  Post,
  Put,
  Query,
  Request,
  Response,
} from '@nestjs/common';
import { StudentService } from './student.service';

@Controller('student')
export class StudentController {
  constructor(private readonly studentService: StudentService) {}

  @Get()
  getStudent(@Query() { id }, @Request() req) {
    return this.studentService.getStudent(req, id);
  }

  @Get('/:id')
  getStudentById(@Request() req) {
    return this.studentService.getStudentById(req);
  }

  @Post()
  addStudent(@Request() req) {
    return this.studentService.addStudent(req);
  }

  @Put('/:id')
  editStudent(@Request() req) {
    return this.studentService.editStudent(req);
  }

  @Delete('/:id')
  deleteStudent(@Request() req, @Response() res) {
    return this.studentService.deleteStudent(req, res);
  }
}
