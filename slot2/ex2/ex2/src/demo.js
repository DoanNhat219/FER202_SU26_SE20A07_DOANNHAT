let tong=(a,b)=>a+b;
//goi ham tong voi 2 so 5, sau đó in kết quả ra console

console.log(tong(2, 5));
let chao=() =>console.log("Xin chào mọi người!");
//goi ham chao de in ra chu "Xin chào mọi người!"
chao();
// viet ham chao 2 de in ra chu "Xin chào, tôi là một hàm arrow function!"
let chao2=() =>console.log("Xin chào, tôi là doannhat!");
chao2();
// viet ham chao2 nhan 1 tham so la 1 doi tuong Person co cac thuoc tinh name ,id,age,address, sau do in ra chu "Xin chào, tôi là [name], tôi [age] tuổi, sống tại [address]"
let chao3=(person) =>console.log(`Xin chào, tôi là ${person.name}, tôi ${person.age} tuổi, sống tại ${person.address}`);
let person={ name:"doannhat", id:1, age:21, address:"da nang"};
chao3(person);