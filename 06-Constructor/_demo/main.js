// Function ที่เอาไว้ สร้าง OBJ 
// New keyword เสมอ
// Function ขึ้นด้วยตัวใหญ่ PPt หน้า 86  Js06obj
const log = console.log;
log('Constrctor Function')

const dev1 ={
    name :'John',
    age : 32,
    role :'dev',
    salary: 40_000,
    dev : function() {
        log("i'm develop some features");
    },
};

//Obj creator == Constrctor Function
// อยากใส่ชื่อให้รีับเป็น param
function Developer(name,age) { // ต้องขึ้นด้วยตัวใหญ่ 
    // กำหนดให้ this = {} obj ว่างเปล่า
    this.name = name; //{name:name} เอา obj this property name มา assign ค่า 
    this.age = age;// เพิ่ม key age 
    this.role ='dev';
    this.salary= 40_000;
    this.dev = function() {
        log(`${this.name} develop some features`);
    };
}
//เรามองไม่เห็น obj {ว่างเปล่า}
// return this ให้ auto 
// เอาไปเก็บใน dev2 ,dev3 
// this = instance ตัวที่ถูกสร้างใหม่ 

const dev2 = new Developer('Palm',25);// instance

const dev3 = new Developer('Jane',30); //instance 
log(dev2);
log(dev3);
log(dev2.dev());
dev2.dev();