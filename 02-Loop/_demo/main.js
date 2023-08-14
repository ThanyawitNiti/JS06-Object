const user = {
    firstName :'Codecamp',
    age :15,
};

'firstName' in user; // true
'age' in user; // true
'phone' in user; // false

// for In : loop through obj
// for (let <key_variable> in <obj>) {}
// best practice 
// for ( let key in user ) {}
for ( let key in user ) {
// ถ้าชื่อ key dynamic ให้สร้างตัวแปรขึ้นมา ในที่นี้คือ key
// ทุกๆครั้งที่ลูปค่านี้ key จะเปลี่ยนไป 
 console.log(key);
// ถ้าอยากเข้าไปหา value ทำยังไง ?
console.log(user[key]) 
}
//1st : user[key] == user['firstName'] => Codecamp
//2st : user[key] == user['age'] => 15


// 'firstName' in user; // true => รันต่อ
// 'age' in user; // true
// 'phone' in user; // false =>หยุดรัน