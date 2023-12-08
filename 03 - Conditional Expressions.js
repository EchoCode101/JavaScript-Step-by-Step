console.log("This is my Javascript Programming 03 - Conditional Expressions");

// Prompts & alerts
let age = prompt("Enter your age below:");
age = Number.parseInt(age);

if (age < 5 || age > 100) {
  alert("This is an invalid age");
} else if (age >= 5 && age < 9) {
  alert("This site is not for kids!");
} else if (age >= 9 && age < 18) {
  alert("There is limited content for teenagers!");
} else if (age >= 18 && age <= 50) {
  alert("You can access this site");
} else if (age > 50 && age <= 100) {
  alert("You are too old for this!");
}
// console.log(`You can (age <18? "Not Drive" : "Drive")`);
alert(`You can ${age < 18 ? "not drive" : "drive!"}`);
