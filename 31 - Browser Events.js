// let a = document.getElementsByClassName("container")[0]
// a.onclick = () => {
//     let b = document.getElementsByClassName("container")[0]
//     b.innerHTML = "Hello World!"
// }

// addEventListener and removeEventListener

let x = function (e) {
    console.log(e.target)
    console.log(e)
    console.log(e.time)
    console.log(e.type)
    console.log(e.clientX, e.clientY)
    //   alert("Hello World!1");
};
// let y = function (e) {
//   alert("Hello World!2");
// };


btn.addEventListener("click", x);
// btn.addEventListener("click", y);
// let a = prompt("What's your favorite number?");
// if (a == "2") {
//   btn.removeEventListener("click", x);
// }



