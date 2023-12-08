console.log("This is my Javascript Programming 11 - Array Methods.js");


let num = [1, 2, 3, 4, 5]
let b = num.toString()
console.log(b) 

let c = num.join("+")
let d = num.join("_")
console.log(c)
console.log(typeof c)
console.log(d)


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

let r = num.unshift(4) // removes an element at Start of an array
console.log(num, r)  //return the new length of the array
