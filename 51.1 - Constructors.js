class RailwayFrom {
  constructor(givenName, trainNo, address) {
    console.log("Constructor Called..." + givenName + " " + trainNo);
    this.name = givenName;
    this.trainNo = [trainNo];
    this.address = address;
  }
  preview() {
    alert(
      this.name +
        ": Your Form is for Train No." +
        this.trainNo +
        " and address is " +
        this.address
    );
  }
  submit() {
    alert(this.name + ": Your Form is submitted for Train No." + this.trainNo);
  }
  cancel() {
    alert(this.name + ": Your Form is cancelled for Train No." + this.trainNo);
    this.trainNo = null;
  }
}

let hamzaForm = new RailwayFrom("Hamza", 133445, "P-590, Faisalabad - 38000");
hamzaForm.preview();
hamzaForm.submit();
hamzaForm.cancel();
hamzaForm.preview();

