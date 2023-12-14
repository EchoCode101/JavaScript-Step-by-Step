console.log(
  "This is my Javascript Programming 13 - Map, Filter & Reduce functions.js"
);

//Map function
let array = [45, 23, 21, 54];
let a = array.map((value, index, array) => {
  //   console.log(value, index, array);
  return value + index;
});
// console.log(a);

//filer function
let array2 = [45, 23, 21, 54, 12, 1, 5, 3, 4];
let a2 = array2.filter((a) => {
  return a < 10;
});
// console.log(a2);

//Reduce function
let array3 = [45, 23, 21, 54, 12, 1, 44, 1, 2];
const reduce_func = (h1, h2) => {
  console.log(h1, h2);
  return h1 + h2;
};
let a3 = array3.reduce(reduce_func);

console.log("\n\n", a3);
