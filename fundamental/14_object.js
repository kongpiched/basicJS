// การสร้างข้อมูล object
var person = {
    firstName:"Samit",
    lastName:"Koyom",
    age:35,
    grade:"Male",
    fullName: function(){
        return this.firstName+" "+this.lastName
    }
}

// การเรียนหรือการเข้าถึงสมาชิกใน Object
// Method 1
//objecctName.propertyName
console.log(person.firstName)

//Method2
//objecctName.propertyName
console.log(person["lastName"])

//Method3
//objectName.methodName()
console.log(person.fullName())

//object Nested มีการซ้อนมากกว่า 1 ชั้น
var user = {
    id:"1",
    email:"john@gmail.com",
    personInfo:{
        name:"John",
        address:{
            line1:"255 Tepharak Rd.",
            line2:"Bangsaothong Distric",
            city:"Samutprakarn",
            zipcode:"10570"
        }
    }
}

console.log(user.personInfo);
console.log(user.personInfo.name);
console.log(user.personInfo.address);
console.log(user.personInfo.address.city);