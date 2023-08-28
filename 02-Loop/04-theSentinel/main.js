// ให้เขียนโปรแกรมที่รับค่า key และ value ของ Properties ของ Object หนึ่ง จนกว่าจะเจอคำว่า stop ถึงหยุด
// และให้นำค่าเหล่านั้นมาสร้าง Object หลังจากนั้น log object นั้นออกมา

const obj = {};
const stop = "stop";

let key;
let value;

do {
  key = prompt("enter key of Object");
  value = prompt("enter value of Object");
  if (key != "stop" && value != "stop") {
    obj[key] = value;
  }
} while (key != stop && value != stop); //false

console.log(obj);
