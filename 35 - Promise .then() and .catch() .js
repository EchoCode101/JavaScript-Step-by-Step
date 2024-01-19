let p = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I'm a Promise and I'm  resolved!");
    // reject(new Error("I'm a new Error"));
    resolve(true);
  }, 3000);
});
let p2 = new Promise((resolve, reject) => {
  console.log("Promise is pending");
  setTimeout(() => {
    // console.log("I'm a Promise and I'm  Rejcted!");
    reject(new Error("I'm a new Error"));
    // resolve(true);
  }, 4000);
});

//Consumers: .then() & .catch()
p2.then(
  (value) => {
    console.log(value);
  },
  (error) => {
    console.log(error);
  }
);
// p2.catch((error) => {
//     console.log(error);
// })
