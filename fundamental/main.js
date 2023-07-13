document.write("<h1>Hello JavaScript</h1><br>");
document.write("Hello JavaScript<br>");
document.write("Hello JavaScript<br>");

let name = "kong";
let age = 28;



let day = new Date().getDay();

switch(day){
    case 0:
        console.log("sunday");
        document.body.style.backgroundColor = "yellow";
        break;
    case 1:
        console.log("sunday");
        document.body.style.backgroundColor = "green";
        break;
    case 2:
        console.log("sunday");
        document.body.style.backgroundColor = "pink";
        break;
    default:
        console.log("unknow");
        document.body.style.backgroundColor = "red";
        break;
}
