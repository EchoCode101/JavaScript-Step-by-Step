console.log("This is my Javascript Programming 08 - Strings.js");

let nme = "Hamza";
let friend = "Furqan";
console.log(nme.length);
console.log(nme[0]);

// Tempalte Literal
let boy1 = "Abubaker";
let boy2 = "Hamza";

let sentance = `${boy1} is a friend's brother "of" ${boy2}`; //Variables directly inserted into Template Literals, is called String Interpolation in JavaScript
console.log(sentance);

// Escape Sequence

let fruit = 'Ora"n\n\t\t\re';
console.log(fruit);

let name1 = "hamza";

// console.log(name1.length);
// console.log(name1.toUpperCase());
// console.log(name1.toLowerCase());
// console.log(name1.slice(0, 3));
// console.log(name1.slice(1));
// console.log(name1.replace("h" , "umaraedfas"));

let fr = " Nabeel" + " Hamza";
console.log(fr.length);
let toArray = "";

for (let i = 0; i < fr.length; i++) {
  toArray += fr[i];
  console.log(toArray);
}

for (let i = fr.length - 1; i >= 0; i--) {
  let to1Array = fr.slice(0, i) // Remove one character at index i
  console.log(to1Array);
}









console.log(toArray);

console.log(name1.concat(" is a Friend of ", fr, " Wow!"));

let str = "Hello, World!";
let output = "";
for (let i = 0; i < str.length; i++) {
  output += str[i];
}
console.log(output);
