// ES 5
var scores = [55, 65, 75];
// var s1 = scores[0];
// var s2 = scores[1];
// console.log(s1, s2);

// ES 6

const [s1, , s3] = scores;
console.log(s1, s3);

// Return object
function createUser() {
  return { name: "kong", age: 25 };
}

const { name, age } = createUser();
console.log(name, age);
