class Person {
  constructor(name) {
    this.name = name;
  }

  sayHi() {
    console.log("Hi, My name is" + this.name);
  }

  get gender() {
    return this._gender;
  }

  set gender(g) {
    this._gender = g;
  }
}

const p = new Person("Piched");

console.log(p.name);
p.sayHi();

p.gender = "Male";
console.log(p.gender);
