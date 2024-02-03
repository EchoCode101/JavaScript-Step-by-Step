//Try / Catch and Error Object

try {
  let age = prompt("Enter your age");
  age = Number.parseInt(age);
  if (age > 120) {
    throw new Error("Invalid Age");
  }
  //for custom error we use throw new Error
} catch (err) {
  console.log(err.name);
  console.log(err.message);
  console.log(err.stack);
}
console.log("Script is running");

//The Finally Clause

const f = () => {
  try {
    a = 0;
    // console.log(program);
    console.log("Program is running");
    return;
  } catch (err) {
    console.log("This is an error");
    console.log(p);
  } finally {
    console.log("I'm a good boy");
  }
};
f();
console.log("End");
