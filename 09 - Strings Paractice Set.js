console.log("This is my Javascript Programming 09 - Strings Paractice Set.js");

//Question No. 1
string = 'har"';
console.log(string.length);

//Question No. 2

let sentance = `Welcome to Learn Forms!

bookmark_border
This course breaks down HTML forms into easy to understand pieces. Over the next few modules, you'll learn how an HTML form works and how to use them effectively in your projects. Use the menu pane by the Learn Forms logo to navigate the modules.

You'll learn how to build a basic HTML`;

let word = "Mdn";
sentance = sentance.toLowerCase();
word = word.toLowerCase();

console.log(
  `The word ${word} ${
    sentance.includes(word) ? "is" : "is not"
  }  in the sentance.`
);
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Question No. 3

const str1 = "Cats are the best!";

console.log(str1.endsWith("best!"));
// Expected output: true

console.log(str1.endsWith("best", 17));
// Expected output: true

const str2 = "Is this a question?";

console.log(str2.endsWith("question"));
// Expected output: false

//Question No. 4
//Extracted a part of a string

let str3 = "Please give Rs 1000.";
let amount = Number.parseInt(str3.slice(15, 19));
console.log(amount);
console.log(typeof amount);

//Question No. 5
//String is immutable!
friends = "Ali Haider";
friends[5] = "W";
console.log(friends);
