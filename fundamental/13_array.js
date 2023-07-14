
var firstname = ['John','Jo','Jack','Jane'];
var fruits = new Array('Apple','Banana','Orange','Mango')

console.log(firstname);
console.log(typeof(firstname));
console.log(firstname[0]);
console.log(firstname[2],firstname[3]);

firstname[1]="Jenny"; 
console.log(firstname);

firstname[3]="Jepp";
console.log(firstname);
console.log(fruits);

for(var i=0;firstname[i];i++){
    console.log(firstname[i]);
}


fruits.forEach(myFruits)

function myFruits(values){
    console.log(values);
}
