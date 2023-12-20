console.log(
  "This is my Javascript Programming 17 - JS Alert, Confirm & Prompt.js"
);

alert("Hello your script works!");

// confirm("Are you sure you want to Continue?");

let a = prompt("Enter the value of 'a' below:", 588);
a = Number.parseInt(a);
alert("You entered a of type is " + typeof a);
let write = confirm("Do you want to write it to the page?");
if (write) {
  document.write(a);
} else {
  document.write("Please allow me to write");
}
document.write(a);
