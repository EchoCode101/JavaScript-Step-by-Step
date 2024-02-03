class Employee {
  constructor(name) {
    console.log(`${name} - Employee's constructor is here`);
    this.name = name;
  }
  login() {
    console.log(`Employee has logged in`);
  }
  logout() {
    console.log(`Employee has logged out`);
  }
  requestLeaves(Leaves) {
    console.log(`Employee has requested ${Leaves} leaves - Auto Approved`);
  }
}
class Programmer extends Employee {
  constructor(name) {
    super(name);
    console.log(`This is a newly written constructor`);
    // this.name = name;
  }
  // constructor(...args) {   .
  // ---> if there is no constructor is in child class , this constructor is created automatically

  //     super(...args);
  // }
  requestCoffee() {
    console.log(`Employee has requested ${x} coffees`);
  }
  requestLeaves(Leaves) {
    super.requestLeaves(4);
    console.log("one extra leave is granted");

    // console.log(`Employee has requested ${Leaves + 1} leaves (One Extra)`)
  }
}
let e = new Programmer("Hamza");
e.login();
e.requestLeaves(3);
