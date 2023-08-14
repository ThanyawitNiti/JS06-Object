// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น



// before 
let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};

// function isString(num) {
//     let str = true ;
//     for (let key in num) {
//         str = false
//     }
//     return str

// }

// function multiplyNumeric(num) {
//     if (isString(num)) return 0 ;

//     let sum = key *3



// }

const multiplyNumeric = (obj,num) => {

    //obj ที่เรารับเข้ามีหลาย key เราไม่มีทางรู้จำนวน จึงใช้ for in 
    for (let key in obj) {
        //1 st key เก็บ str คำว่า 'width' ไว้ และเปลี่ยนเป็น 2nd เมื่อจบลูป
        //2 nd key เก็บ str คำว่า 'height' ไว้
        console.log(key);  // width height title ใน obj จากการเรียก menu  
         let value = obj[key];
        console.log(value) // 200 300 My menu
        if (typeof value === 'number') {
        console.log(value,num) // 200 3 300 3 My menu 3
        //update value
        obj[key] = obj[key] * num
        // obj[key] = value * num
        // Object[key] *= num
        //menu['width'] = 200 * 3
        //menu['height'] = 300 * 3
        }
    }

};

multiplyNumeric(menu,3)
console.log(menu)

let menuObj = {
    with:200,
};
menuObj.with =menuObj.with*2;
menuObj['with'] = menuObj['with']*2;

// ในแต่ละรอบ ของ Loop for in
let key = 'width';
menuObj [key] =menuObj[key] *2



// after call function multiplyNumeric(menu, 3)
// menu = {
//   width: 600,
//   height: 900,
//   title: 'My menu'
// };
