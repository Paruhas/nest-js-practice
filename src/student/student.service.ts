import { Injectable } from '@nestjs/common';

@Injectable()
export class StudentService {
  getStudent(
    req,
    id,
  ): {
    students: { id: number; name: string; level: number }[];
  } {
    console.log(req.body, 'req');
    console.log(id, 'id');
    return id;
  }

  getStudentById(request) {
    return { params: request.params.id };
  }
}
