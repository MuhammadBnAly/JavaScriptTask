//
var data;

// function getData() {

// 
// console.log(location.search.split("?")[1]);

data = location.search.split("?")[1];
// 
// query
//Name
var queryName = data.split("&")[0];
//Address
var queryAddress = data.split("&")[1];
//Gender
var queryGender = data.split("&")[2];
//Email
var queryEmail = data.split("&")[3];
//Mobile
var queryMobile = data.split("&")[4];

//
//data
// 
//Name
var name = queryName.split("=")[1];
//Address
var address = queryAddress.split("=")[1];
//Gender
var gender = queryGender.split("=")[1];
//Email
var email = queryEmail.split("=")[1];
var email1 = email.split("%40")[0];
var email2 = email.split("%40")[1];
email = email1 + "@" + email2;
//Mobile
var mobile = queryMobile.split("=")[1];


//display
// console.log(data.split("&")[0].split("=")[1]);
// console.log(data.split("&")[1].split("=")[1]);

document.writeln("<h3>Welcome Mr :" + name + ". <br> Your Address is :" + address + ". <br>Your Gender is :" + gender + ".<br> Your Mail :" + email + ".<br> Your Mobile is :" + mobile + ".</h3><br>");

// }
