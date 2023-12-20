//change the card title to red
let ctitle = document.getElementById("firstcardtitle");
console.log(ctitle);
ctitle.style.color = "red";

let ctitles = document.querySelectorAll(".card-title")
ctitles[0].style.color = "red";
ctitles[1].style.color = "blue";
ctitles[2].style.color = "green";
console.log(ctitles);
    

document.querySelector(".this").style.color = "red";
document.querySelector(".this").style.background = "blue";

console.log(document.body.getElementsByTagName("div"));
console.log(document.querySelector(".card").getElementsByTagName("a")); 
console.log(document.getElementsByName("class_name")); 