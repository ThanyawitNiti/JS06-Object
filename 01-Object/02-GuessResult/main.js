// บรรทัดที่มี * และ ** ให้ผลลัพธ์เป็นอะไร เพราะอะไร


const user = {
  email: 'cc@gmail.com',
  isActive: true
};

// user.isActive = false;
// console.log(user); // * email: 'cc@gmail.com',
// isActive: false เพราะได้มีการอัปเดตค่า จากบรรทัดบนเป็น false 
user = {};
console.log(user); // ** Error เพราะไม่สามารถกำหนดชื่อตัวแปรซ้ำให้กับ const ได้


