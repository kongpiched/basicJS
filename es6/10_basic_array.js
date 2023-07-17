// Join Array
const numbers = [10, 20, 30, 40];
console.log(numbers.join());
console.log(numbers.join("/"));

//หาผลรวมสมาชิก
console.log(numbers[0] + numbers[1] + numbers[2] + numbers[3]);

// loop sum
let result = 0;
for (let i = 0; i < numbers.length; i++) {
  result += numbers[i];
}

console.log(result);

//Reduce Array
const result_data = numbers.reduce((sum, number) => {
  return sum + number;
}, 0);

console.log(result_data);

//Concat ของ Array เป็นการรวม Array
const myarr1 = [5, 6, 7];
const myarr2 = [8, 9, 10];

//const myresult = myarr1 + myarr2
const myresult = myarr1.concat(myarr2);
console.log(myresult);
console.log(myarr1);
console.log(myarr2);

// Push
const mutate = ["red", "green"];
const count = mutate.push("blue");
console.log(mutate);
console.log(count);

//Pop ลบสมาชิกของ Arrays
const pop = mutate.pop();
console.log(mutate);
console.log(pop);

//shift ลบ Array ตัวแรก
const shift = mutate.shift();
console.log(mutate);
console.log(shift);

// unshift เพิ่มสมาชิกกลับเข้าไปที่ตัวแรก
const unshift = mutate.unshift("red", "yellow");
console.log(mutate);
console.log(unshift);

console.log("---------------------------------------------");

// Splice ดึงข้อมูลสมาชิกแบบระบุตำแหน่งที่แน่นอน
const mutate_arr = ["red", "green", "0", "1", "blue"];
// const spliced = mutate_arr.splice(2, 2); //ตำแหน่ง 2 , ลบ 2 ตัว
const spliced = mutate_arr.splice(2, 2, "while", "pink");
console.log(mutate_arr);

console.log("---------------------------------------------");

// Slice
const mutate_arr1 = ["red", "green", "0", "1", "blue"];
const sliced = mutate_arr1.slice(1, 3);
console.log(sliced);

// Avoid Array Mutation
const fruits = ["banana", "apple", "mango"];

// เพิ่ม strawberry หน้า apple
const newFruit = [...fruits.slice(0, 1), "stawbery", ...fruits.slice(1)];

console.log(newFruit);

// ลบ apple ออก
const newFruit2 = [...fruits.slice(0, 1), ...fruits.slice(2)];

console.log(newFruit2);

// การวนลูป Array
// Foreach
const num_arr = ["one", "two", "three"];
num_arr.forEach((result) => {
  console.log(result);
});

//For of
for (const v of num_arr) {
  if (v == "two") {
    //break; // หยุด
    continue; // ข้าม
  }
  console.log(v);
}
console.log("---------------------------------------------");

// การค้นหาตำแหน่งสมาชิกของ array
const num_arrays = [1, 4, 8, 10, 8, 11, 12];
const index = num_arrays.indexOf(8);
console.log(index);

// findIndex
const found = num_arrays.findIndex((e) => e % 4 == 0);
console.log(found);
