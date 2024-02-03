class Complex{
    constructor(real, imaginary)
    {
        this.real = real
        this.imaginary = imaginary
    }
    add(num) {
        this.real  = this.real + num.real;
       this.imaginary = this.imaginary + num.imaginary;

    }
    get real() { return this._real }
    get imaginary() { return this._imaginary }

    set real(newReal) {this._real = newReal}
    set imaginary(newImaginary) {this._imaginary = newImaginary}
}

let a = new Complex(2, 4)
console.log(a.real, a.imaginary)
a.real = 10
a.imaginary = 10
let b = new Complex(6, 2)
console.log(a.add(b))
console.log(`${a.real}+${a.imaginary}i`)







// class Human {
//     constructor(name, favFood) {
//         this.name = name
//         this.favFood = favFood
//     }
//     walk() { 
//         console.log(`${this.name} Human is Walking`)
//     }
// }
// class Student extends Human {
  
//     walk() {
//     console.log(`${this.name}: Student is Walking`);
//   }
// }

// let o = new Student("Hamza","Pizza")
// o.walk()

// console.log(o instanceof Human)