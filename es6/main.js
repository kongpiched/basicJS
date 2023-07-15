import { sayHi, sayBye } from "./say.js";

import * as say from "./say.js";

import { sayHi as sh, sayBye as sb } from "./say.js";

sayHi("John");
sayBye("John");

say.sayHi("John");
say.sayBye("John");

sh("John");
sb("John");

// import class default
import User from "./user.js";
const obj = new User("John");
console.log(obj.name);
obj.sayHi();
