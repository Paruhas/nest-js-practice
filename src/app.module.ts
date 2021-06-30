import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { StudentController } from './student/student.controller';
import { StudentService } from './student/student.service';
import { StudentModule } from './student/student.module';
import { TeacherController } from './teacher/teacher.controller';
import { TeacherService } from './teacher/teacher.service';
import { TeacherModule } from './teacher/teacher.module';

@Module({
  imports: [TeacherModule, StudentModule],
  controllers: [AppController, StudentController, TeacherController],
  providers: [AppService, TeacherService, StudentService],
})
export class AppModule {}
