class Animal {
  constructor(name, color) {
    this.name = name;
    this.color = color;
  }
  run() {
    console.log(this.name + " is running!");
  }
  shout() {
    console.log(this.name + " is Shouting!");
  }
}
class Monkey extends Animal {
    eatBanana() { 
        console.log(this.name + " is eating banana!");
    }
}
let ani = new Animal("cato", "white");
let m = new Monkey("Chimp", "Orange");
ani.shout()
m.eatBanana()
m.shout()