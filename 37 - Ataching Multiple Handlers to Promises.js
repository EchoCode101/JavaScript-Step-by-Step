let p1 = new Promise((resolve, reject) => {
  //   alert("Hey I am not resolved!");
  setTimeout(() => {
    resolve(1);
  }, 2000);
});

p1.then(() => {
  console.log("This Promise is resolved!");
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3);
    },3000);
  });
}).then((value)=>{console.log(value)});

p1.then(() => {
  console.log("Hurray!");
});
