// function doA() {
//   setTimeout(() => {
//     console.log("This 1");
//   }, 2000);
// }

// function doB() {
//   console.log("This 2");
// }

// doA();
// doB();

// function doA(callback) {
//   console.log("Loading ...");
//   setTimeout(() => {
//     console.log("This 1");
//     callback();
//   }, 2000);
// }

// function doB() {
//   console.log("This 2");
// }

// doA(function () {
//   doB();
// });

console.log("----------------------------------");
function loadNews(cb) {
  console.log("Loading ...");
  setTimeout(() => {
    cb([
      { id: 1, title: "a" },
      { id: 2, title: "b" },
      { id: 3, title: "c" },
      { id: 4, title: "d" },
      { id: 5, title: "e" },
      { id: 6, title: "f" },
    ]);
  }, 2000);
}

loadNews((result) => {
  console.log(result);
  console.log("Load data complete");
});
