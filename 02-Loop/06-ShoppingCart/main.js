// - ให้เขียนโปรแกรมรับค่า 4 ค่าได้แก่ ชื่อสินค้า จำนวนที่ขาย ราคาต่อชิ้น และส่วนลดต่อชิ้นหน่วยเป็นเปอร์เซนต์
// // - นำค่าที่รับมาไปสร้างเป็น object ที่มี key-value ตามค่าที่รับมา ถ้าส่วนลดเป็น 0 หรือไม่มีค่าไม่ต้องสร้าง key-value ที่เก็บส่วนลด
// - สร้างฟังก์ชันคำนวณราคาที่แท้จริงของ object (ราคาหลังหักส่วนลด)

let name2 = prompt("Enter product name");
let quantity2 = +prompt("Enter product quantity");
let price2 = prompt("Enter price");
let discount2 = prompt("Enter product discount");

const products = {
  name,
  quantity,
  price,
  discount,
};

function calcPrice(price, quantity, discount = 0) {
  let Totalprice = price * quantity * (1 - discount);
  return Totalprice;
}

let result = calcPrice(products.price, products.quantity, products.discount);
console.log(result);

function calcPricev2(productobj) {
  let price = productobj.price;
  let quantity = productobj.quantity;
  let discount = productobj.discount || 0;
  return price * quantity * (1 - discount);
}
let resultv2 = calcPricev2(products);
