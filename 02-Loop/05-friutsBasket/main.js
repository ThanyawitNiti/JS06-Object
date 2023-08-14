// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง  
// โดยให้ key เป็นชื่อของผลไม้ และ value เป็นจำนวนของผลไม้ (number)   
// โดยถ้า ผลไม้ชนิดไหนที่มีมากกว่า 1 ผล ให้เติม s ไปหลัง key นั้นด้วย

// //### Version1
// // Init
// const fruits = {};

// // accept input
// // let key = 'apple';
// let key = prompt('Enter fruit')
// // let value = 10 ;
// let value = +prompt('Enter Quantity')

// //update 
// fruits[key] = value;

// ///

// if(value ==1) {
//     fruits[key] = value;

// } else if (value >1) {
//     fruits[`${key}s`] =value;
// }

// console.log(fruits);


///Ver2 ถ้าไม่พิมพ์ stop จะไม่หยุด
const fruits = {};
const terminate = 'stop';

let key;
let value;

// รับ key วนไปเรื่อยๆ
do {
    // let ข้างใน จะไม่ stop ข้างนอกจะเป็น undefiend ตลอด
    key = prompt('Enter fruit');
    value = prompt('Enter Quantity');

    ///  update 
    if (+value == 1) {
        fruits[key] = value;

    } else if (+value > 1) {
        fruits[`${key}s`] = value;
    }
    console.log(key,value);

} while (key != terminate && value != terminate);



console.log(fruits);