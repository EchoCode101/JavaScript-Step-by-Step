// first.insertAdjacentHTML("beforebegin", '<div class ="test">beforebegin</div>');
// first.insertAdjacentHTML("afterbegin", '<div class ="test">afterbegin</div>');
// first.insertAdjacentHTML("beforeend", '<div class ="test">beforeend</div>');
// first.insertAdjacentHTML("afterend", '<div class ="test">afterend</div>');

// first.remove(div)

//-----------------------------------------//
//className and classList in JavaScript

let first = document.getElementById("first");
first.className = "red";

// console.log(first.classList)
// console.log(first.classList.remove("red"))
// console.log(first.classList.add("yellow"))
// console.log(first.classList.toggle("yellow"))
// console.log(first.classList.contains("red"))

//-----------------------------------------//

//setTimeout and setInterval

document.write("Hello");

const sum = (a, b, c, d) => {
  console.log("Yes, I'm running " + (a + b + c + d));
  a + b;
};

setTimeout(sum, 2000, 1, 5, 0, 4);
let b = setInterval(function () {
  alert("Hello, I'm setInterval");
}, 3000);
console.log(b)
clearInterval(b,7000 );

// let a = setTimeout(function () {
//   alert("I'm inside of setTimeout!");
// }, 3000);
// let b = prompt("Do you want to run a setTimeout? (y/n)");
// if (b === "n") {
//   clearTimeout(a);
// }
// // clearTimeout(a);
// console.log(a);
