/*datatype
-primitive : Boolean , Number ,String 
-non-primitive : Object
เก็บของเป็นกลุ่ม กลุ่มนี้เรียก Object
ถ้าอยากได้ value ต้องส่ง key 
{}
*/
// ######## Object Declaration############ 
// {} stand for object / scope
// {record_1,record_2,record_3,record_4,...}
// ในแต่ละ record => <key_name> : <value>
//<value> : สามารถเก็บได้ทุก Datatype 
// ชื่อ <key_name> มี datatype ไหม ? => ต้องเป็น data type : STR
// ถ้าต้องการใส่ช่องว่างที่ชื่อ str แนะนำให้ใส่ ' ' เช่น 'like human'
// recoed === property ( คุณสมบัติ , สิงที่มี ) == key-value pair
let user = {
    // การกำหนดค่าใน object
    // key : value ;
    firstName : 'Palm',
    lastName : 'Nit',
    age : 29,
    isAdmin : true,
    'like human' : true,


};
function add() {
    // function scope
    if (a) {
        //  block scope
    }
}

// ######## Access , Modify , Delete ############ 
//Every action NEED <Key_name>
// Dot Notation => สัญลักษณ์ที่ใช้งาน dot  => <obj>.<key_name>
// GET , POLL ,READ ขอข้อมูล 
console.log(user.firstName); // Palm => หมายถึง value ที่อยู๋ในส่วนย่อยของ firstname 
// ไป obj ชื่อuser แล้วมองหา key firstName
console.log(user.lastName);
console.log(user.age);
console.log(user.isAdmin);
// console.log(user.like human); 
// ข้อจำกัด . notation เข้าถึง key ที่มี space ไม่ได้ 
console.log(user.salary);  // ชื่อ key ไม่มีอยู่จริง = undefiend

// Modify , Update ใช้ชื่อ key ที่มีอยู่แล้ว
// dot notaion พร้อม assignment 
// Syntax : <obj>.<key_name> = newValue
user.firstName = 'Than';
user.age = 25;
user.age += 2; // 27
user.age ++ ; // 28
console.log(user.age);

////### use only key
// user['age'] = user['age'] +5;
// user['age'] += 5;
// user['age'] ++;
////### user key variable
// let key ='age';  -> conpute key
// user[key] = user[key] +2; ประมวล key ก่อน ว่าเป็น str age แล้วไปเอา obj ใน user ซึ่งคือ age มา แล้วเอานำ value ของ age มาบวก  
//เอาค่าใน obj user 
//feild key -> property age เขียนทับ field เดิม

//ADD
// Syntax : <obj>.<new_name> = newValue
user.address = 'Bkk';
console.log(user);

// DElete
delete user.firstName;
console.log(user);

// ######## NESTED OBJECT ############ 
const employee = {
    fullName : 'John Done',
    salary : 500_000,
    address : {                             /* value สามารถเป็น obj ได้ */
        district : 'Phaya Thai',
        province : 'Bkk',
        country : 'Thailand',
    } 

}

// GET,POLL for NESTED OBJECT 
console.log(employee.salary);
console.log(employee.address.province);
console.log(employee.address.district);

employee.address.province = 'Nontahburi';
delete employee.address.country;

//Prevent Crash !!
// dot ใช้ กับ Object เท่านั้น !!! <obj>.<key>
// ห้ามมมมมมมมมมมมมมม ใช้กับ <undefined>.<key> จะพัง
// วิธีแก้  optional chaning => <undefined>?.<key> สิ่งอยู่ข้างหน้าใช้ dot ได้ไหม
console.log(employee.addr.province); => // undefined.province => error ไม่สามารถอ่าน undefinedได้  //แก้โดย console.log(employee.addr?.province) =>  ? คือ เช็คข้างหน้า ? สามารถ . ต่อได้ไหม , เป็น Obj ไหม
console.log(employee.addr); // undefined

console.log(employee.address?.province);
console.log(employee.address?.village);
console.log(employee.address?.country);


// ######## 4.Check key ? ############ 

const product = {
    id: 227,
    name : 'iPhone',
    price : 50_000,
    // discount : 0.05, 

}
// IN Operator
// Syntax : <key_name_string> in <obj>
'name' in product // true, false
console.log('name' in product);
console.log('discount' in product);

// method hasOwnProperty
//Syntax : <obj>.hasOwnProperty(<key_name>) => Boolean
console.log(product.hasOwnProperty('name'));
console.log(product.hasOwnProperty('discount'));


// ######## 5.Bracket ? ############ []
//Syntax : <obj>['<key_name_string>']
// ชื่อ key ข้างใน ต้องเป็น string 
// ถ้าไม่ใช้ str ต้องเป็น ตัวแปรที่เก็บ string => variable ที่เก็บชื่อ key ไว้
// access key value ผ่านชื่อ ตัวแปรได้
console.log(product.id); //=> 227
console.log(product['id']); //=> 227 
// access with [' '] can use with spcae => 'like human'
product['name'] = 'Iphone15';
// console.log(product);

let a ='name';
// obj ชื่อ product ที่เป็น str ที่ตัวแปร a เก็บไว้ = > compute key ข้อดี คือ ตอน วนลูปท้ง obj
console.log(product[a]); 
console.log(product['name']);
console.log(product.a); //=> undefined

// ##### PropertyshortHand
let username = prompt('What is your name?');
let email = prompt('What is your E-mail?');
let password = prompt('What is your password?');

const user = {
    username : username,
    email : email,
    password : password,
    
}
//property shorthand
// can do when key_name match with value
const usershorthand = {
    username,
    email,
    password,
    
}

//loop

const user99 = {
    name : 'John',
    age : 99,
    isMarried : false,
};
// loop for 2nd
//variable = key  value = age
// แต่ยังเข้าถึง value ไม่ได้
//  user.key วิ่งไป user และดูว่ามี property คำว่า keyไหม
for (let key in user99) {

    console.log(key);  //=> value99 ยังเข้าถึงไม่ได้
    console.log(user[key]) // => รอบสอง เข้าถึง value 99 
    console.log(user['age']) // => รอบสอง เข้าถึง value 99 
    // user[key] = user[key] +5; รอบแรก 'john5'
    // user[key] = user[key] +5; รอบสอง 104
    // user[key] = user[key] +5; รอบสาม false + 5 =>  0+5

}

//Critical point
// - bracket notation ใช้กับkey ที่เป็น string หรือ ตัวแปรที่เก็บ string
// - for(let <key> in <obj>) JS จะ auto reassign key ใหม่ให้ทุกรอบ คือ (string )
// obj[key] = obj[key] + new => container = value +new