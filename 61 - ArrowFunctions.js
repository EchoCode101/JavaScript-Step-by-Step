
const helloFunc = ( name,greeting) => console.log(greeting + " " + name);


const x = {
    name: "Hamza",
    role: "Developer",
    exp: "2 years",
    show: function () {
        // let that = this;
        // console.log(this)
        setTimeout( ()=> {
            // console.log(this)
            console.log(`The name is ${this.name}\nThe role is ${this.role}`);
            
        }, 2000);
    }
}
// helloFunc("Hamza", "hello");
x.show()