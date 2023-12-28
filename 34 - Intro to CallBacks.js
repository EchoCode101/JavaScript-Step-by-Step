// Syncronus Programming//

// let a = prompt("what is your name?");
// console.log("your age is ", a);

// Asyncronus Programming//

// console.log("Start");
// setTimeout(function () {
//   console.log("Hey Im good!");
// }, 2000);
// console.log("End");

//CallBacks//

function loadScript(src, callBack) {
  let script = document.createElement("script");
  script.src = src;
  script.onload = function () {
    console.log("script loaded SRC: " + src);
    callBack(null, src);
  };
  script.onerror = function () {
    console.log("Error Loading Script SRC: " + src);
    callBack(new Error("SRC got error"));
  };
  document.body.appendChild(script);
}

function a1(error, src) {
  if (error) {
    console.log(error);
    return;
  } else {
    alert("first function " + src);
  }
}
function a2(error, src) {
   if (error) {
     console.log(error);
     return;
   } else {
     alert("second function " + src);
   }
}

loadScript(
  "https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js",
  a1
);
