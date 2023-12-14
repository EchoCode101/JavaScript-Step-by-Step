console.log("This is my Javascript Programming 11 - Array Methods.js");

let num = [1, 2, 3, 4, 5];
let b = num.toString();
console.log(b);

let c = num.join("+");
let d = num.join("_");
console.log(c);
console.log(typeof c);
console.log(d);

// pop function
// let r = num.pop() // remove the last element from the array
// console.log(num, r) //return the element which is removed

//push function
// let r = num.push(56) // add an element at last of an array
// console.log(num, r) // return the new length of the array

// Shift function

// let r = num.shift() // removes an element at Start of an array
// console.log(num, r)  //return the element which is removed

// UN-Shift function

// let r = num.unshift(4) // removes an element at Start of an array
// console.log(num, r)  //return the new length of the array

//Delete function

// console.log(num.length); //return the length of an array
// delete num[0];
// console.log(num.length); //return the length of an array

//Concat function
// let num_more = [11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
// console.log(num_more.concat(num, num_more, num));
// console.log(num_more.concat(num).length);
// console.log(num, '\n', num_more);

//Sort Method
// let compare = (a, b) => {
//   return b - a;
// };

// let num_more = [225, 9, 98, 12, 22, 25, 45, 65, 48, 12, 11, 14, 11, 15, 19];
// num_more.sort(compare);
// console.log(num_more.reverse())
// console.log(num_more);

//Splice function and Slice function
// let deletedItems = num.splice(2, 2, 1003, 1001, 1002);

// console.log(deletedItems);

// console.log(num);
// // let newnum = num.slice(3);
// let newnum = num.slice(2, 5);

// console.log(newnum);
