// function แบบไม่มี parameter
function wakeup(){
    console.log("Hey!! wakeup now");
}

// function แบบมี parameter
function sayHello(name){
    console.log("Hello "+name)
}

// function แบบมี parameter หลายตัว
function calArea(width,height){
    var area = width*height;
    return area;
}


wakeup();
sayHello("kong");
console.log(calArea(3,4)+" ตรม.");

// function แบบ Expression เก็บfunctionลงตัวแปร
var action = function (a,b) {
    return a*b
}
var result = action(4,3);

console.log(action(3,5));
console.log(result);