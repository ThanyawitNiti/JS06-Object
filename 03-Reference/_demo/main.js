//########## Reference ############# 
//key word
// copied by  value
// copied by  reference


// copied by  value
// primitive
let message = 'Hello' ;
let word = message ;// รับค่ามาจาก messsage -> ดูว่า message เก็บอะไรไว้ แล้วไป copy value ใน message มา
console.log(message) // 'hello' 
console.log(word) // 'hello' 

message = 'hi'; //ถูก reassign ใหม่
//word ยังเก็บ str เดิมไว้อยู๋
console.log(message) // 'hi' 
console.log(word) // 'hello' 

// copied by  reference
// non primitive
// copy value ให้ด้วย
// user ไม่ได้เก็บ obj ไว้ แต่เป็นการเก็บที่อยู่หรือ memrory address ของ obj ไว้
// user และ employ เข้าถึง address เดียวกันได้ 
let user = {
    name : 'John',
};
// กำลัง copy
// เป็นบอกที่อยู่ให้กับอีกตัวแปรนึง 
let employee = user;
console.log(employee)

user.name = 'Jane';

console.log(user.name) //=> 'Jane'
console.log(employee.name);

let a = {}
let b = {}
a==b// => false

//Clone 

const todo = {
    task : 'do homework',
    complete : false,
    due_date : '13-08-2023',
} ;

// const newTodo = todo ; // เป็นการ cody address 

// สร้าง obj ใหม่ 
const newtodo ={} // สิ่งที่เกิดขึ้นกับ อันนี้ไม่เกีย่วกับ todo แล้ว
// วิธีที่หนึ่ง เอาต้นแบบ มา loop แล้ว assign ทีละ key value ให้ obj ใหม่
 for (  let key  in  todo) { //loop 3 times task complete due_date

    //assign ทีละ key value ให้ obj ใหม่

    newtodo[key] = todo[key]
    // newtodo['task'] = todo['task'] => 'do Hm'
    // newtodo['complete'] = todo['complte'] => false
    // newtodo['due_date'] = todo['due_date'] => '13-08-2023'
    

 }
 console.log(newtodo);
 newdoto.complete = true ;
 console.log(newtodo.complete);
 console.log(todo.complete);

// วิธีที่สอง obj.assign (dst ,[src1,src2,sr3,.....,srcN]) 
//เอา src1 ทับ dst เสร็จแล้ว 
//เอา src2 มาทับอันที่เสร็จแล้วต่อ
Object.assign(newtodo,todo)  // constructor function , รับพารามิเตอร์ได้ไม่จำกัด /evaluate process จากขวาไปซ้าย เอาtodo มา merge/override ผสมยุบรวม ถ้าnew เป็นค่าว่าง จะเอา อันเก่ามาเขียนทับ เอาแต่ละ key ที่มี ไป assing ให้ new 
// ถ้าไม่ใช่ obj ว่างเปล่า เช่น new มี key ซ้ำ กับ old เอา ตัวขวาเขียน ทับ ตัวซ้าย
// return address ของ destination (param 1) newtodo
//2A
// const newtoDO ={};
// Object.assign(newtoDO,todo);
//2B
//Object.assign({},todo) 
//const newTodo 
//const newTodo = Object.assign({},todo);