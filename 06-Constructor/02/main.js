// ให้สร้าง Constructor Function: Accumulator(startingValue) 
// - มี property ชื่อ currentValue ไว้เก็บค่าสะสม (มีค่าเท่ากับ startingValue ตอน Object ถูกสร้าง)
// -  มี method  read() ให้รับค่า input และให้บวกเข้ากับค่า currentValue
// -  มี method  show() ให้ alert ค่า currentValue

let Accumulator = {
    currentValue:'',
    read(input){
        return this.currentValue = input + this.currentValue
    },
    show(){
        alert(this.currentValue)
    }
}
// Accumulator.read()
console.log(Accumulator.read('Ok it\'s working'))
console.log(Accumulator.currentValue)
console.log(Accumulator.show())