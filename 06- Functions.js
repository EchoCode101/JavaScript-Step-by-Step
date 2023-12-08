console.log("This is my Javascript Programming 06- Functions.js");

function onePlusAvg(x, y) {
  console.log("Done");

  return Math.round(1 + (x + y) / 2);
}

const sum = (p, q) => {
  return p + q;
};

const hello = () => {
  console.log("Hi, How are you?");
  return "Hi";
};

let a = 3;
let b = 5;
let c = 6;

// hello();
let v = hello();
console.log(v);

let SUM = sum(333, 9);
console.log(SUM);

console.log("This is One Plus Average of a and b", onePlusAvg(a, b));
console.log("This is One Plus Average of c and b", onePlusAvg(c, b));
console.log("This is One Plus Average of c and a", onePlusAvg(c, a));
