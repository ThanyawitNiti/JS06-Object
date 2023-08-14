// ให้สร้าง Object ที่มี property เหมือน state1 แต่ loading ให้มีค่าเป็น false point มีค่า 75 และให้เพิ่ม property success เข้าไปโดยให้มีค่าเป็น true 

const state1 = { username: 'john', point: 100, loading: true };

const state2 = Object.assign({},state1,{loading: false,point:75},{success:true});

console.log(state2);
// state2.loading= false;
// state2.point = 75;