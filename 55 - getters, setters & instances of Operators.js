class Brid{
    constructor(name) {
        this._name = name;

    }
    fly() {
        console.log(`${this._name} is flying!`);
    }
    get name() {
        return this._name;
    }
    set name(newName) {
        this._name = newName; 
    }
}
class Rabit extends Brid{
    eatCarrot() { 
        console.log(`Eating Carrot`);
    }

}

let eagleFly = new Rabit("Eagle")
eagleFly.fly() 
console.log(eagleFly.name)
eagleFly.name = "xyz"
console.log(eagleFly.name)
let c = 1 

console.log(eagleFly instanceof Brid)
console.log(eagleFly instanceof Rabit)
console.log(c instanceof Brid)
