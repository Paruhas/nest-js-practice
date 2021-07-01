import { Injectable } from '@nestjs/common';

const fs = require('fs');
const util = require('util');

const readFile = util.promisify(fs.readFile);
const writeFile = util.promisify(fs.writeFile);

@Injectable()
export class StudentService {
  async getStudent(req, id) {
    const rawJsonStudents = await readFile('./students.json', 'utf8');
    const studentsData = JSON.parse(rawJsonStudents);
    if (id) {
      const studentsRes = studentsData.filter((item, index) => {
        // console.log(item);
        return item.id === id;
      });
      return { students: studentsRes };
    } else {
      return { students: studentsData };
    }
  }

  async getStudentById(request) {
    const rawJsonStudents = await readFile('./students.json', 'utf8');
    const studentsData = JSON.parse(rawJsonStudents);
    return {
      student: studentsData.filter((item, index) => {
        return item.id === request.params.id;
      }),
    };
  }

  async addStudent(req) {
    // console.log(req.body);
    const rawJsonStudents = await readFile('./students.json', 'utf8');
    const studentsData = JSON.parse(rawJsonStudents);

    // validate
    if (!req.body.name || !req.body.level) {
      return { message: 'name and level cannot be blank' };
    }

    const newStudentData = [
      ...studentsData,
      {
        id: +studentsData[studentsData.length - 1].id + 1,
        name: req.body.name,
        level: req.body.level,
      },
    ];
    // console.log(newStudentData);
    await writeFile('./students.json', JSON.stringify(newStudentData));

    return { message: 'add newStudentData successful' };
  }

  async editStudent(req) {
    const rawJsonStudents = await readFile('./students.json', 'utf8');
    const studentsData = JSON.parse(rawJsonStudents);

    // validate
    const findThisId = studentsData.findIndex((item, index) => {
      return item.id === +req.params.id;
    });
    // console.log(findThisId);
    if (findThisId === -1) {
      return { message: 'this studentId not found' };
    }

    if (!req.body.name && !req.body.level) {
      return { message: 'name and level cannot be blank' };
    }
    if (!req.body.name && req.body.level) {
      const insertData = studentsData.find((item, index) => {
        return item.id === +req.params.id;
      });
      // console.log(insertData);
      req.body.name = insertData.name;
    }
    if (req.body.name && !req.body.level) {
      const insertData = studentsData.find((item, index) => {
        return item.id === +req.params.id;
      });
      // console.log(insertData);
      req.body.level = insertData.level;
    }

    const newStudentData = [...studentsData];
    newStudentData.map((item, index) => {
      if (+req.params.id === item.id) {
        item.name = req.body.name;
        item.level = req.body.level;
      }
      return item;
    });
    // console.log(newStudentData);
    await writeFile('./students.json', JSON.stringify(newStudentData));

    return { message: 'update studentData successful' };
  }

  async deleteStudent(req) {
    const rawJsonStudents = await readFile('./students.json', 'utf8');
    const studentsData = JSON.parse(rawJsonStudents);

    // validate
    const findThisId = studentsData.findIndex((item, index) => {
      return item.id === +req.params.id;
    });
    // console.log(findThisId);
    if (findThisId === -1) {
      return { message: 'this studentId not found' };
    }

    const newStudentData = studentsData.filter((item, index) => {
      return item.id !== +req.params.id;
    });
    // console.log(newStudentData);
    await writeFile('./students.json', JSON.stringify(newStudentData));

    return { message: 'delete studentData successful' };
  }
}
