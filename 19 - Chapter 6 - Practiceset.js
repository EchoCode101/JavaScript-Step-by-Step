console.log(
  "This is my Javascript Programming 19 - Chapter 6 - Practiceset.js"
);


let runAgain = true;

const canDrive = (chkage) => {
    return chkage >= 18 && chkage <= 65 ? false : true;
};
while (runAgain) {
    let chkage = prompt("Please enter your age", 0);
    chkage = Number.parseInt(chkage);
    if (chkage < 0) {
        console.error("Please enter a valid age!")
        break;
    }


    if (canDrive(chkage)) {
        alert("You cannot Drive!");
        //  document.write("You cannot Drive!");
        document.body.style.backgroundColor = "red";
    } else {
        alert("You may Proceed, Thank you!");
        // document.write("Y ou may Proceed, Thank you!");
        document.body.style.backgroundColor = "green";
    }
    runAgain = confirm("Do you want to see the prompt again?")
}
