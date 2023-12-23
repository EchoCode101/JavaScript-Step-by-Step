//TagName & nodeName:

let x = document.getElementsByTagName("span")[0];
console.dir(x); //shows the current element as an object with its properties
let y = document.getElementsByTagName("span")[0];
console.log(y); //prints the current element and what's inside that element tag

console.log(document.body.firstElementChild.nodeName); //prints the first element child's nodeName

console.log(document.body.firstChild.nodeName); //prints the first child's nodeName

//------------------------------------------//
console.log(first.innerHTML);
// console.log(first.innerHTML = "<i>Hey, I am span</i>");
console.log(first.outerHTML);
// console.log((first.outerHTML = `<div id= "first" ><i>Hey, I am span</i></div>`));
console.log(first.outerHTML);


//------------------------------------------//
console.log(document.body.firstChild)
console.log(document.body.firstChild.data)
console.log(document.body.firstChild.nodeValue);
console.log(document.body.textContent);

console.log(first.hidden = false)
//------------------------------------------//