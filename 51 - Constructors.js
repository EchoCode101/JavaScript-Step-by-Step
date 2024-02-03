class RailwayFrom {
    constructor(givenName, trainNo) {
        console.log("Constructor Called..." + givenName + " " + trainNo);
    this.name = givenName;
    this.trainNo = trainNo;
  }
  submit() {
    alert(this.name + ": Your Form is submitted for Train No." + this.trainNo);
  }
  cancel() {
    alert(this.name + ": Your Form is cancelled for Train No." + this.trainNo);
  }
}

//Create & Fill  a Form for Harry
let harryForm = new RailwayFrom("Harry", 1451);
// harryForm.fill();

//Create & Fill a Form for Hamza
let hamzaForm = new RailwayFrom("Hamza", 1455);
let hamzaForm1 = new RailwayFrom("Hamza", 14525);
// hamzaForm.fill(;
// hamzaForm1.fill();

harryForm.submit();
hamzaForm.submit();
hamzaForm1.submit();
hamzaForm1.cancel();
