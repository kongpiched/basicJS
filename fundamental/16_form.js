// รับค่า input ในฟอร์ม
function summitForm(){
    let fullname = document.myform.fullname.value;
    let address = document.myform.address.value;
    console.log(fullname);
    console.log(address);  

    let result = document.getElementById("result").innerHTML = "ชื่อ " + fullname + "<br>ที่อยู่ " + address
}
