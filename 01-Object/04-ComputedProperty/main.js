// ให้เขียนโค้ดเพื่อรับค่าจากผู้ใช้งาน 3 ค่า และเก็บไว้ในตัวแปร username, email และ password  
// // ให้สร้าง object user ที่มี property 3 อันคือ username, email และ password โดยให้แต่ละ property มีค่าตามตัวแปรที่รับมา

let username = prompt('What is your name?');
let email = prompt('What is your E-mail?');
let password = prompt('What is your password?');

const user = {
    username : username,
    email : email,
    password : password,
    
}
//property shorthand
const usershorthand = {
    username,
    email,
    password,
    
}