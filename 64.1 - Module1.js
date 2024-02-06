//ES6 Modules

export const hello = () => {
    console.log("Hello Hamza");
} 
export const ahello = (name) => {
    console.log("Hello " + name);
} 


// module.exports = { hello, ahello }

const hamza = () => {
    console.log("Hello " + "Hamza!");
}

export default hamza;