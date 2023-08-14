// ให้สร้างฟังก์ชันเพื่อตรวจสอบ object ว่าเป็น object ว่างหรือไม่  
// ถ้า object มี property อย่างน้อยหนึ่งแสดงว่าไม่ใช่ object ว่าง

// ถ้าไม่ส่ง obj ตรวจไม่ได้ 
// output => boolean 
// assume ก่อนว่า isempty คือ true 
// พอเข้าลูปได้แสดงว่า false 


function isEmptyObj (obj) {

    let isEmpty =true ;

    for (let key in obj) {
        isEmpty = false;
    }
    return isEmpty;
}

isEmptyObj({age:10}) //=> false