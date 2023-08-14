ผลลัพธ์ในบรรทัดที่มี * มีค่าเป็นอะไรและเพราะอะไร

var name = 'Joe';
function makeUser() {
  return {
    name: 'John',
    ref: this
  };
}
let user = makeUser();
//makeUser() = {name:'John', ref: this} 
//makeUser() => {name:'John', ref: 'Joe'}
//user =  makeUser()
//call ใน window -> this solve ตอนนี้ที่อยู่ window 
console.log(user.ref.name); // * 'Joe'
