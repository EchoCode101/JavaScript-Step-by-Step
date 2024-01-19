// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Resolved after 2 seconds!");
//     resolve(56);
//   }, 2000);
// });

// p1.then((value) => {
//   console.log(value);
//   let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Promise 2");
//     }, 2000);
//   });
//   return p2;
// }).then((value) => {
// 		console.log("We are Done!");

// 		return 2
// }).then((value) => {
// 	console.log("We are fully done!")
// });

const loadScript = (src) => {
  return new Promise((resolve, reject) => {
    let script = document.createElement("script");
    script.type = "text/javascript";
    script.src = src;
    document.body.appendChild(script);
    script.onload = () => {
      resolve("Script has been loaded Successfully!");
    };
    script.onerror = () => {
      reject(0);
    };
  });
};
let p1 = loadScript("http://127.0.0.1:5500/");
p1.then((value) => {
  console.log(value);
  return loadScript("http://127.0.0.1:5500/");
})
  .then((value) => {

    console.log("Second .then function Loaded Successfully!");
  return loadScript("http://127.0.0.1:5500/");

  })
  .then((value) => {
    console.log("Third .then function Loaded Successfully!");
  })
  .catch((error) => {
    console.log(
      "We are sorry but we are having some Error loading this script!"
    );
  });
