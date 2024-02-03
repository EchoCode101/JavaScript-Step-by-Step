let key = prompt("Please enter your key for Local Storage");
let value = prompt("Please enter your value for Local Storage");

localStorage.setItem(key, value);

console.log(`The value at ${key} is ${localStorage.getItem(key)}`);
if (key == "red" || key == "green" || key == "blue") {
    localStorage.removeItem(key);
}

if (key == 0) {
    localStorage.clear();
}

 