// let btn1 = document.getElementById("btn1");
// let btn2 = document.getElementById("btn2");
// let btn3 = document.getElementById("btn3");

// let x = function (e) {
//   alert("Button 1 is clicked", e.target);
// };

// let y = function (e) {
//   alert("Button 2 is clicked", e.target);
// };

// let z = function (e) {
//   alert("Button 3 is clicked", e.target);
// };

// btn1.addEventListener ("click", x);

// btn2.addEventListener("click", y);

// btn3.addEventListener("click", z);



///////////////////////////////////////////////////////

//For repeatability fetching the data from a web server
////////////////////////////////////////////////////////////////

// document.getElementById("google").addEventListener("click", function () {
//   window.location = "http://www.google.com/";
//   win.focus();
// });

// const fetchContent = async (url) => {
//   con = await fetch(url);
//   let a = await con.jason();
//   return a;
// };

// setInterval(async function () {
//   let url = "https://jasonplaceholder.typicode.com/todos/1";
//   console.log(await fetchContent(url));
// }, 1000);

///////////////For Toggling a Bulb on and off//////////////////

setInterval(async function () {
  document.querySelector("#bulb").classList.toggle("bulb");
}, 300);
