console.log("This is my Javascript Programming 10 - Arrays.js");

let marks_class_11 = [
  81,
  92,
  38,
  47,
  58,
  65,
  72,
  81,
  49,
  70,
  null,
  "Not present",
  true,
];
console.log(marks_class_11);
console.log(marks_class_11[0]);
console.log(marks_class_11[1]);
console.log(marks_class_11[2]);
console.log(marks_class_11[3]);
console.log(marks_class_11[4]);
console.log(marks_class_11[5]);
console.log(marks_class_11[6]);
console.log(marks_class_11[7]);
console.log(marks_class_11[8]);
console.log(marks_class_11[9]);
console.log(marks_class_11[11]);
console.log(marks_class_11[12]);
console.log(marks_class_11[13]);
console.log(marks_class_11[14]);
console.log("The length of marks of class 12th list is", marks_class_11.length);

marks_class_11[13] = 79;
marks_class_11[0] = 9;

console.log(marks_class_11);
console.log(typeof marks_class_11);

let marks = [81, 92, 38, 47, 58, 65, 72, 81, 49, 70, null, "Not present", true];

for (let i in marks) {
  console.log("The marks of student number", i, "is", marks[i]);
}
