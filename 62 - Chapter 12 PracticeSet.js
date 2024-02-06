//Solution #1 and #3

const a = async (text, n = 2) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(text);
    }, 1000 * n);
  });
};
(async () => {
  let text = await a("Hello, world!");
  console.log(text);
  text = await a("Hello1, world!");
  console.log(text);
})();

//Solution #2
function sum(a, b, c) {
  return a + b + c / 3;
}
let x = [1, 3, 4];
console.log(sum(...x));


//Solution #3

(async () => {
  let text = await a("I am resolving after one second",1);
  console.log(text);
  text = await a("I am resolving after four second",4);
  console.log(text);
})();

//Solution #4

function simpleInterest(p,r,t) {
    return(p*r*t)/100
}
console.log(simpleInterest(100,5,1))
//Solution #1
//Solution #1
//Solution #1
