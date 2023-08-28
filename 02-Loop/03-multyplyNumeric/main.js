// ให้เขียนฟังก์ชัน multiplyNumeric(obj, num) เพื่อคูณ value ของ object  
// คูณเฉพาะ value ที่เป็น number เท่านั้น



let menu = {
  width: 200,
  height: 300,
  title: 'My menu'
};



const multiplyNumeric = (obj,num) => {

    for (let key in obj) {
        
        console.log(`this is ${key}`);  
         let value = obj[key];
         console.log(`this is ${value}`) 
         console.log(`this is a ${obj[key]}`) 
         if (typeof value === 'number') {
        console.log(value,num) 
        
        obj[key] = obj[key] * num
      
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


let key = 'width';
menuObj [key] =menuObj[key] *2



