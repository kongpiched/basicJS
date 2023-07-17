const array = [1, 2, 3];
// [2,4,6]
// for (let i = 0; i < array.length; i++) {
//   array[i] = array[i] * 2;
// }

const result = [];
// for (let i = 0; i < array.length; i++) {
//   const a = array[i] * 2;
//   result.push(a);
// }
array.forEach((e) => {
  const a = e * 2;
  result.push(a);
});

console.log(result);
console.log(array);
console.log("---------------------------------------------");

// Array Map
// const result_map = array.map((result) => result * 2);
// console.log(result_map);
console.log(array.map((result) => result * 2));

console.log("---------------------------------------------");
const pets = [{ name: "Jo" }, { name: "Jack" }];

const result_data = pets.map((e) => e.name);
console.log(result_data);

// เพิ่มเติม
const fruits = ["banana", "apple", "mango"];

const result_fruit = fruits.map((e, i, d) => {
  return `Day ${i + 1} eat ${e}`;
});

console.log(result_fruit);
