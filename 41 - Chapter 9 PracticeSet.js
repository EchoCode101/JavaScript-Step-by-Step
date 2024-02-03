const loadScript = async (src) => {
  return new Promise((resolve) => {
    // Remove the unused 'reject' parameter
    let script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(src + " Done Successfully");
    };
    document.head.append(script);
  });
};
// Solution 1

// let a = loadScript(
//     "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
// );
// a.then((value) => {
//     console.log(value);
//   })

// Solution 2

// const main1 = async () => {
//   console.log(new Date().getMilliseconds());
//   let a = await loadScript(
//     "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
//   );
//   console.log(a);
//   console.log(new Date().getMilliseconds());
// };
// main1();

// Solution 3

// let p = async () => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       reject(new Error("This is not acceptable"));
//     }, 3000);
//   });
// };

// let a = async () => {
//   try {

//     let c = await p();
//     consol.log(c);
//   }
//   catch (err) {
//     console.log("This error has been handled");
//   }
// };
// a();

// Solution 5
let p1 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(10);
    }, 2000);
  });
};
let p2 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(20);
    }, 1000);
  });
};
let p3 = async () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(30);
    }, 3000);
  });
};

//This function uses parallel execution for time saving and performance improvements

let run = async () => {
  console.time("run");
  let a1 = p1();
  let a2 = p2();
  let a3 = p3();
  let a1a2a3 = await Promise.all([a1, a2, a3])
  console.log(a1a2a3);
  // console.log(a1,a2,a3)
  console.timeEnd("run");
};
run()