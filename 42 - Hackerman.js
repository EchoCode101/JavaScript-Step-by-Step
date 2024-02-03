// let textContent1 = document.getElementById("textContent1");
// let textContent2 = document.getElementById("textContent2");
// let textContent3 = document.getElementById("textContent3");

// async function printtext1() {
//   setTimeout(() => {
//     textContent1.innerHTML = "Hacking WiFi Password...Please Wait...";
//   }, 1000);
// }
// async function printtext2() {
//   setTimeout(() => {
//     textContent2.innerHTML = "Hacking Username & Password...Please Wait...";
//   }, 2000);
// }

// async function printtext3() {
//   setTimeout(() => {
//     textContent3.innerHTML = "Hacking FaceBook ID...Please Wait...";
//   }, 3000);
// }

// const main1 = async () => {
//   console.log("code is working");
//   let a = await printtext1();
//   let b = await printtext2();
//   let c = await printtext3();
// };
// main1();

let a = [
  "Initializing Hack tool...",
  "Connecting to Facebook...",
  "Connecting to the Server 1...",
  "Connection Failed. Retrying...",
  "Connecting to the Server 2...",
  "Connected Successfully...",
  "Username hamza16615...",
  "Trying Brute Force...",
  "200K Passwords Tried...",
  "Match Not Found...",
  "Another 200K Passwords Tried...",
  "Match Found...",
  "Accessing Account...",
  "Hack Successful...",
];
const sleep = async (seconds) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(true);
    }, seconds * 1000);
  });
};
const showHack = async (messages) => {
  await sleep(1.5);
  console.log(messages);
  text.innerHTML = text.innerHTML + messages + "<br/>";
};
/************* async IIFE Imidiatly Invoked async Function Expression              ***************/

(async () => {
  for (let i = 0; i < a.length; i++) {
    await showHack(a[i]);
  }
})();

//   ().catch((error) => {
//     console.log(error)
//   })
