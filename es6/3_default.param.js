// ES5
function sayHi(name) {
  var name = name || "kong";
  console.log("Hi " + name);
}

sayHi();
sayHi("Samit");

//ES6
function sayHello(name = "Kong") {
  console.log("Hi " + name);
}

sayHello();
sayHello("Ron");
