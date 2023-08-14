// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์  
// // - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด  
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)


// part 1 : input
// let name ='Hermes';
let name2 = prompt('Enter product name');
// let quantity = 20 ;
let quantity2 = +prompt('Enter product quantity');
// let price = 500_000;
let price2 = prompt('Enter price');
// let discount = 0.1; //=> ส่วนลด 10%
let discount2 = prompt('Enter product discount');


// part 2 : create obj
// ###########Version1
// const products = {
//     name :name , // name = 'Harmes'
//     quantity :  quantity, //quantity = 20
//     price :price, // price = 500_000
//     discount : discount ,// discount = 0.1

// };
// ###########Version2
// เมื่อชื่อ key ตรงกับ ชื่อตัวแปรที่เก็บ value สามารถยุบ syntax ได้โดยเรียกว่า (property shorthand)
const products = {
    name ,
    quantity ,
    price , 
    discount  ,

};

// ถ้าไม่ใส้ discount ด้านบน
// if (discount != 0) {
//     product['discount'] = discount;
//     }

//part 3 : calculate price

// discount 10% paid 90%
// discount 0.1 paid 0.9
// price , quantity ,diccount มีผลต่อการกำควณราคาทั้งหมด [1] ส่งทุกอย่างนี้มา  => Totalprice
function calcPrice (price,quantity,discount = 0) { // เซต dis = 0 ให้เป็นค่าเริ่มต้น กันเขาไม่ส่งส่วนลดมา จะได้ไม่เกิด bug 
    let Totalprice = price * quantity * (1-discount);
    return Totalprice;
}

let result = calcPrice(products.price,products.quantity,products.discount);
console.log(result);
// ใช้ยากเพราะต้องพิมพ์เยอะ ไม่สะดวกต่อผู้ใช้งาน

function calcPricev2(productobj) { //productobj = {name,quantity,price,discount}
    let price = productobj.price;
    let quantity =productobj.quantity;
    let discount =productobj.discount || 0; // ถ้าไม่มีหรืออันดิฟาย เป็น false จะ evaluate 0 ให้
    return price * quantity *(1-discount);
}
let resultv2 = calcPricev2(products);