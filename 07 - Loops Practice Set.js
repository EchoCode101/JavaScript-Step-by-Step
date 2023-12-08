console.log("This is my Javascript Programming 07 - Loops Practice Set.js");

let marks = {
  Harry: 89,
  Abubakar: 50,
  Bilal: 71,
  Hamza: 80,
};

//Problem No. 1:

// for (let i = 0; i < Object.keys(marks).length; i++) {
//   console.log("The marks of " +  Object.keys(marks)[i] + " are " +  marks[Object.keys(marks)[i]]);
// }

//Problem No. 2:

for (let key in marks) {
  //   console.log(i)
  console.log("The marks of " + key + " are " + marks[key]);
}

//Problem No. 3:

// let cn = 6;
// let i;
// while (i != cn) {
//     alert("Try Again!");
//     i = prompt("Enter a Number");
// }
// alert("You have Entered a Correct Number!");

// Problem  No. 4:
let a = 3,
  b = 5,
  c = 9,
  d = 1,
  e = 4;

const mean = () => {
  return (a + b + c + d + e) / 5;
};

console.log("The Mean of five Numbers is " + mean());
