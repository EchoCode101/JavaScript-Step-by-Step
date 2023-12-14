console.log("This is my Javascript Programming 16 - JavaScript in Browser.js");


console.log(console)
console.error("console")
console.time("console")
console.warn("console")
console.assert("console" != false)
console.assert("console" == false)


console.time("forLoop")
for (let i = 0; i < 9999; i++) {
  console.log(233);
}
console.timeEnd("forLoop");



console.time("whileLoop")
let i = 0;
while (i<9999){
    console.log(233) 
    i++;
}
console.timeEnd("whileLoop"); 