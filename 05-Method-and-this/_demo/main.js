// Method & this 
const log = console.log ;

log('method and this keyword');

//each record => called property
// each property => <key>:<value>

//some record => <key>:<FN>
//called method == ความสามารถของ Obj

function devWeb() {
    log('I am working and i am Function');
}
function meeting() {
    log('Metting FN')
}
function calc() {
    let a =2 ;
    let b =2 ;
    log(`i am calculator FN ${a}+${b} `);
}

const programmer = {
    name :'Palm',
    age : 29,
    dev : devWeb,
    meet : meeting,
    calcu : calc,
    
};

//Property
//Syntax : <obj>.<key>
log(programmer.name);
log(programmer.age);

// method ความสามารถของ Object 
//Stntax : <obj>.<method>()
programmer.dev() // devWeb()
programmer.meet() // meeting()
programmer.calcu() // calc()

// Summary Object === collection ot properties and method

//2.alternative way to write method


const programmer2 = {
    name :'Palm2',
    age : 29,
    dev2 : function() {
        log('i am working version anonymous')
    },
    meet : () => log("i'm meeting version arrow function"),
    sleep () {
        log('i am sleeping version medthod shorthand');
    }
    // sleep :() => sleep เก็บฟังก์ชันที่ไม่มีชื่อ
};
programmer2.dev2()
programmer2.meet()
programmer2.sleep()

//Mini_lab_01

const miniMe ={
    name : 'Palm',
    age : 29,
    gender : 'Male',
    eye : 'black',
    myFavTeam :['Paris','ManU'],
    eat : eat,
/////////////////////////////////////
    ride : function() {
        log('i ride to learn')
    },
//////////ที่เป็น () ใส่ param เข้าไปได้ ////////////////////////////
    read: (book) => log(`i read ${book} everyday`),
///////////////////////////////////
    code(language){
        log(`i like to code ${language}`)
    },
} ;

function eat(food) {
    log(`I like to ${food}`);
}

miniMe.eat();
miniMe.ride();
miniMe.read('Homo');
miniMe.code('JavaScript');

//OOP : Object Oriented Program
// มองทุกอย่างเป็น OBJ 
// detail ทุกอย่างถูกซ่อนได้ logi ถูกซ่อนได้ เปิดให้ accesss เท่าที่จำเป็นต้องเปิด

const car = {
    brand : 'Tesla',
    model : "X",
    speed : 100,
    drive: () => log("Drive"),
    'aito pilot' : () => log("self driving"),

}
log(car.brand,car.model);
car.drive();
car['aito pilot']();

// มีผู้เรียกใช้งาน ตามด้วยชื่อความสามารถ

const  cal = {
    sum : (x,y) => x+y,
    minus :(x,y) => x -y,
};
log(car.speed);
car.speed = cal.sum(car.speed,20);
//key.property = cal.sum(x,y);
// x from obj car 
//cal.sum ดึง obj  car  key speed มาคำนวณในฟังก์ชัน และ กำหนดค่าคืนไปยัง car .speed 
log(car.speed);

let r1 = cal.sum(10,2);
let r2 = cal.minus(10,2);
log(r1,r2);

//#############
//##### This Keyword
//#############
//JS keyword : if ,else, for, while, do, switch,this 
//THIS
//this หมาย ถึงตัวมันเอง
// ค่าของ this ไม่ได้ถูก Solve ตั้งแต่ตอนเขียน FN This ไม่มีทางรู้ว่าจะเป็น obj ไหน 
const userThis ={
    name :'CC15',
    age : 16,
    sayHi () {
        log(`Hello ${this.name}`)
        //this.name = userthis.name
    },
    growOld () {
        log(this);
        this.age++
    },
}
userThis.sayHi();
userThis.name = 'software park';
userThis.sayHi();
userThis.growOld();
log(userThis.age);

function dev(feature) {
    log(`${feature} developed by ${this.name}`); //ตอนนี้ยังไม่รู้ค่า this 
}

const programmer1 = {
    name:'John',
    devel :dev ,
}

const programmer3 = {
    name:'Max',
    devel :dev ,
}
// this ถูก solve ตอนเรียก method เท่านั้น
// called.method => this ==called == obj before the dot
programmer1.devel('login');
// FN devel ถูกรัน และไปเจอค่า this 
// this จะถามว่าใครเรียกใช้ และไปดู programmer 1 ที่เป็นคนเรียกใช้ และไปดูว่ามี property อะไร
programmer3.devel('Front');
// programmer3 > devel > dev > this (this.name) > name ในไหน  > programmer3 
//ต่างจาก param ยังไง 
//param  ต้องกำหนดเข้าไปให้ ตอน () FN 
//medtod This dynamic เรียกใช้ ตาม obj ที่เรียกใช้
// This มันจะวนกลับไปเรียกใช้ property ของ objที่เรียก และนำ key ที่ตามหลัง เช่น name มาใช้ คือ this.name มาใช้
// ทุกๆการสร้าง FN จะทำการ  สร้าง context ของมันเอง
// 1.เวลารันฟังก์ชันจะสร้าวคอนเทตสำหรับ Execute
// 2. before run JS มี context ตัวหนึ่งทีมาก่อนกาล ,global window -this = current Execute context === window Obj
//3 เพราะฉะนั้น ตอน.. save photo ไว้แล้ว 

//######### Execution Context == Caller#######
// Global in Brower => window obj
// window.alert('i am global')
// this.alert('i am global this')

//การประกาศ Fn declaration จะทำให้ sayHi ไปติดใน windowobj
function sayHi2(){
    log(this); // window
}
var a = 'm' ; // global
//execute context = window
// window.sayHi2();
// this.sayHi2();
// sayHi2();//window

// Fn context
var name ='cc15';

function sayHello() {
    log(this.name);
}
sayHello();//window


const userTest= {
    name :'John',
    say : sayHello,
    scream :() => {
        log(`scream by ${this.name}`)
    },
    scream2 : function() {
        log(`scream by ${this.name}`)
    }
};
userTest.say(); // this ในที่นี้คือ  test obj 
// more information => javascript in weired part
// Arrow ไม่มีความสามารถในการสร้าง context
// loose context => chain window

userTest.scream();
userTest.scream2();
