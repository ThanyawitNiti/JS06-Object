// บรรทัดที่มี * , ** , *** ให้ผลลัพธ์เป็นอะไร เพราะอะไร


// ```js
// const product1 = { name: 'Coke', price: 18, size: '500mL' };

// const product2 = product1;
// product2.name = 'Pepsi';
// product2.price = 19;

// console.log(product1); // * { name: 'Pepsi', price: 19, size: '500mL' };
// console.log(product2); // **{ name: 'Pepsi', price: 19, size: '500mL' };
// console.log(product1 === product2); // *** true
// // เพราะ product1 และ product2 ได้ถูกเก็บ ไว้ใน memory เดียวกัน ทำให้เมื่อมีการเปลี่ยนแปลง ตัวแปรใดตัวแปรหนึ่ง จะทำให้ค่าในตัวแปรนั้นเปลี่ยนแปลงไปด้วย
// ```