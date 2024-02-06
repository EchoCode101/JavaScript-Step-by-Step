//Destructuring//


let arr = [2, 5, 26, 43, 53, 31, 26, 26, 43, 53, 31, 43, 53, 31];
// let [a, , b,...rest] = arr
// console.log(a, b,rest)
let {a,b} = {a:2,b:1}
// console.log(a, b)



// Spread Operator//

let arr1 = [2, 5, 26];
let obj1 = { ...arr1 }
// console.log(obj1)

//to pass the values from an array to a function

const sum=(v1, v2, v3)=> {
    return v1+v2+v3
}
console.log(sum(...arr1))
 
const x = "the", y = "no"
const c = [x, y]
console.log(c)

let obj2 = {
    name: "Hamza",
    Company: "xyz",
    address:"xyz"
}
console.log({...obj2, name:"harry"})

