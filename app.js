//qno 01 reverse a string

// let ss = "hello world ";
// let rs = "";

// for (let i = ss.length - 1; i >= 0; i--) {
//   rs = rs + ss[i];
// }
// console.log(rs);

// q no 02
// let string = "islamic repubulic of italy";
// let vc = 0;
// for (let j = 0; j < string.length; j++) {
//   if ("aeiou".includes(string[j])) {
//     vc++;
//   }
// }
//console.log(vc);

// q no 03

// let s = "islamic republic of italy";

// console.log(s.toUpperCase());

// qno 04
let ss = "islamic republic of italy";

let cs = ss.split("").reverse().join("");
if (ss === cs) {
  console.log("its is a plaimdrome string");
} else {
  console.log("its is not aplaimdrome string");
}

// qno 05
let l = [1, 2, 3, 5, -8, 96, 85, 74, 52, 41, -30, 15];
let sum = 0;
for (let k = 0; k <= l.length; k++) {
  //console.log(l[k]);
  if (l[k] > 0) {
    sum = l[k] + sum;
  }
}
console.log("the sum of all positive numbers is", sum);

// qno 06
let myArray = [4, 2, 7, 1, 9];
let targetElement = 7;

let index = -1;

for (let i = 0; i < myArray.length; i++) {
  if (myArray[i] === targetElement) {
    index = i;
    break;
  }
}

console.log("Index of the first occurrence:", index);

// 7. Remove all duplicates from an array without built-in methods.
let arrayWithoutDuplicates = [];
let originalArray = [1, 2, 3, 4, 2, 5, 6, 3];
for (let i = 0; i < originalArray.length; i++) {
  if (arrayWithoutDuplicates.indexOf(originalArray[i]) === -1) {
    arrayWithoutDuplicates.push(originalArray[i]);
  }
}
console.log(arrayWithoutDuplicates);

// 8. Sort the array in ascending and descending without built-in methods.
let arrayToSort = [4, 2, 7, 1, 9, 5];
for (let i = 0; i < arrayToSort.length - 1; i++) {
  for (let j = 0; j < arrayToSort.length - 1 - i; j++) {
    if (arrayToSort[j] > arrayToSort[j + 1]) {
      // Swap for ascending order
      let temp = arrayToSort[j];
      arrayToSort[j] = arrayToSort[j + 1];
      arrayToSort[j + 1] = temp;
    }
  }
}
console.log("Ascending Order:", arrayToSort);

for (let i = 0; i < arrayToSort.length - 1; i++) {
  for (let j = 0; j < arrayToSort.length - 1 - i; j++) {
    if (arrayToSort[j] < arrayToSort[j + 1]) {
      // Swap for descending order
      let temp = arrayToSort[j];
      arrayToSort[j] = arrayToSort[j + 1];
      arrayToSort[j + 1] = temp;
    }
  }
}
console.log("Descending Order:", arrayToSort);

// q 9.
let en = 2;
while (en <= 20) {
  console.log(en);
  en += 2;
}

// q 10.
let num = 5;
let fac = 1;
do {
  fac *= num;
  num--;
} while (num > 0);
console.log("Factorial:", fac);

// q  11.
const sampleObject = { name: "John", age: 25, city: "Example City" };
for (let prop in sampleObject) {
  console.log(`${prop}: ${sampleObject[prop]}`);
}

// q 12.
const originalArray2 = [3, 7, 2, 5];
for (let element of originalArray2) {
  element *= 2;
  console.log(element);
}

//q 13.
const lum = 15;
console.log(lum % 2 === 0 ? "Even" : "Odd");

// q14.
const num1 = 8,
  num2 = 12,
  num3 = 6;
const maxNumber =
  num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
console.log("Maximum Number:", maxNumber);

//q 15.
const cy = 2024;
const isLeapYear = (cy % 4 === 0 && cy % 100 !== 0) || cy % 400 === 0;
console.log(isLeapYear ? "Leap Year" : "Not a Leap Year");
