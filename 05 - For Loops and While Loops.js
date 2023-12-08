console.log("This is my Javascript Programming 05 - For Loops and While Loops");

// for (let i = 0; i <= 15; i++){
//     console.log(i+1);
// }

/*
let sum = 0 
let num = prompt("Enter a value of n")
num = Number.parseInt(num)
for (let i = 0; i < num; i++){
    sum += i + 1
    // alert((i+1), "+")
} alert("The Sum of first " + num + " natural Numbers is " + sum)
*/

// let mul = 1;
// let num = prompt("Enter a value of n");
// num = Number.parseInt(num);
// for (let i = 0; i < num; i++) {
//   mul *= i + 1;
// }
// alert("The Factorial of Number " + num + " is " + mul);

let marks = {
  Hamza: 78,
  Abu: 81,
  Umar: 56,
  Anam: 32,
};

//for in loop
for (let a in marks) {
  // console.log(a)
  console.log("Marks of " + a + " is " + marks[a]);
}

//for of loop
for (let a of "marks") {
  console.log(a);
}

//for loops are Done
//-------------------------------------------------------------------------------------------------------------

//while loop

// let n = prompt("Enter a value of n");
// n = Number.parseInt(n);
// let i = 0
// while (true) {
//     console.log(i)
//     i++
// }

//do while loop

let f = prompt("Enter a value of n");
f = Number.parseInt(f);

let i = 10;
do {
  console.log(i);
  i++;
} while (i < 10);
