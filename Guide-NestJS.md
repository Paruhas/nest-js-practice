NestJS

run ทางหลังบ้าน (ฺBackend Dev)
support JavaScript and TypeScript
ดัดแปลงมาจาก expressJS เพิ่มเติม (เขียนใกล้เคียงกัน)

#Setup
npm i -g @nestjs/cli

#Create Project
nest new " "

#npm run start

#spec
ตัว test ไฟล์

controller ของใครของมัน
controller รับ HTTP req แล้วทำการส่ง res กลับไป ที่ client
1 app มีได้หลาย controller

#วิธีสร้าง controller 2 วิธี
1.สร้างเอง
2.ใช้คอมมาน
nest g controller " " \*g === generate
nest g controller " " --no-spec \* ไม่เอา spec

- วิธีสร้าง .service .module ก็เปลี่ยน ตรง "controller" ด้านบน เป็นคำสั่งอื่นๆ

- ถ้าสร้างเอง ต้อง import เอง ลงใน app.module ด้วย

#decorators
ตัวระบุตัวตน

1. สร้าง folder
2. สร้างไฟล์ .ts
3. ประกาศ decorators

ต้องมี .controller
ต้องมี .service
ต้องมี .module

ถ้าสร้างเองต้องเช็คใน app.module มีการ import / เรียกใช้งานไหม

@controller("ชื่อ route path")

npm run start:dev > refresh ทุกครั้งที่มีการเปลี่ยนแปลง
npm run start:debug > inspect ใน chrome แล้วจะเพิ่ม debug เข้ามา สามารถ debug ผ่าน google chrome dev ได้

#

1. เขียน module ก่อน แล้วค่อยทำ service และ controller

- swagger คล้ายๆ Postman แต่เราไม่ต้องรู้ API path
