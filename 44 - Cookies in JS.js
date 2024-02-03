console.log(document.cookie)
document.cookie = "naame=Hamza545";
document.cookie = "namwe=Hamza45455";

let key = prompt ("Please enter your key")
let value = prompt("Please enter your value")
document.cookie = `${encodeURIComponent(key)} = ${encodeURIComponent(value)}`;
console.log(document.cookie)