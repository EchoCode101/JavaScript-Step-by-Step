console.log(
  "This is my Javascript Programming 22 - Element only Navigation.js"
);

const changeBgRed = () => {
  document.body.firstElementChild.style.background = "red";
};

// let b = document.body;
// console.log("First Child of b is ", b.firstChild);
// console.log("First Element Child of b is ", b.firstElementChild);

let t = document.body.firstElementChild.firstElementChild;
console.log(t)
console.log(t.rows)
console.log(t.caption)
console.log(t.tHead.firstElementChild)  
console.log(t.tBodies)
console.log(t.tFoot)
console.log(t.rows[2].rowIndex)

console.log(typeof window)
console.log(typeof document)

