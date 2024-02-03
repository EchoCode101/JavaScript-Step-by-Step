class RailwayFrom {
  submit() {
    alert(this.name + ": Your Form is submitted for Train No." + this.trainNo);
  }
  cancel() {
    alert(this.name + ": Your Form is cancelled for Train No." + this.trainNo);
  }
  fill(givenName, trainNo) {
    this.name = givenName;
    this.trainNo = trainNo;
  }
}

//Create a Form for Harry
let harryForm = new RailwayFrom();
//Fill the form with Harry details
harryForm.fill("Harry", 1451);

//Create a Form for Hamza
let hamzaForm = new RailwayFrom();
let hamzaForm1 = new RailwayFrom();
//Fill the form with Hamza details
hamzaForm.fill("Hamza", 1455);
hamzaForm1.fill("Hamza", 14525);

harryForm.submit();
hamzaForm.submit();
hamzaForm1.submit();
hamzaForm1.cancel();
