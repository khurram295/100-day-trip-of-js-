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
// let ss = "islamic republic of italy";

// let cs = ss.split("").reverse().join("");
// if (ss === cs) {
//   console.log("its is a plaimdrome string");
// } else {
//   console.log("its is not aplaimdrome string");
// }

// qno 05
// let l = [1, 2, 3, 5, -8, 96, 85, 74, 52, 41, -30, 15];
// let sum = 0;
// for (let k = 0; k <= l.length; k++) {
//   //console.log(l[k]);
//   if (l[k] > 0) {
//     sum = l[k] + sum;
//   }
// }
// console.log("the sum of all positive numbers is", sum);

// // qno 06
// let myArray = [4, 2, 7, 1, 9];
// let targetElement = 7;

// let index = -1;

// for (let i = 0; i < myArray.length; i++) {
//   if (myArray[i] === targetElement) {
//     index = i;
//     break;
//   }
// }

// console.log("Index of the first occurrence:", index);

// // 7. Remove all duplicates from an array without built-in methods.
// let arrayWithoutDuplicates = [];
// let originalArray = [1, 2, 3, 4, 2, 5, 6, 3];
// for (let i = 0; i < originalArray.length; i++) {
//   if (arrayWithoutDuplicates.indexOf(originalArray[i]) === -1) {
//     arrayWithoutDuplicates.push(originalArray[i]);
//   }
// }
// console.log(arrayWithoutDuplicates);

// // 8. Sort the array in ascending and descending without built-in methods.
// let arrayToSort = [4, 2, 7, 1, 9, 5];
// for (let i = 0; i < arrayToSort.length - 1; i++) {
//   for (let j = 0; j < arrayToSort.length - 1 - i; j++) {
//     if (arrayToSort[j] > arrayToSort[j + 1]) {
//       // Swap for ascending order
//       let temp = arrayToSort[j];
//       arrayToSort[j] = arrayToSort[j + 1];
//       arrayToSort[j + 1] = temp;
//     }
//   }
// }
// console.log("Ascending Order:", arrayToSort);

// for (let i = 0; i < arrayToSort.length - 1; i++) {
//   for (let j = 0; j < arrayToSort.length - 1 - i; j++) {
//     if (arrayToSort[j] < arrayToSort[j + 1]) {
//       // Swap for descending order
//       let temp = arrayToSort[j];
//       arrayToSort[j] = arrayToSort[j + 1];
//       arrayToSort[j + 1] = temp;
//     }
//   }
// }
// console.log("Descending Order:", arrayToSort);

// // q 9.
// let en = 2;
// while (en <= 20) {
//   console.log(en);
//   en += 2;
// }

// // q 10.
// let num = 5;
// let fac = 1;
// do {
//   fac *= num;
//   num--;
// } while (num > 0);
// console.log("Factorial:", fac);

// // q  11.
// const sampleObject = { name: "John", age: 25, city: "Example City" };
// for (let prop in sampleObject) {
//   console.log(`${prop}: ${sampleObject[prop]}`);
// }

// // q 12.
// const originalArray2 = [3, 7, 2, 5];
// for (let element of originalArray2) {
//   element *= 2;
//   console.log(element);
// }

// //q 13.
// const lum = 15;
// console.log(lum % 2 === 0 ? "Even" : "Odd");

// // q14.
// const num1 = 8,
//   num2 = 12,
//   num3 = 6;
// const maxNumber =
//   num1 > num2 ? (num1 > num3 ? num1 : num3) : num2 > num3 ? num2 : num3;
// console.log("Maximum Number:", maxNumber);

// //q 15.
// const cy = 2024;
// const isLeapYear = (cy % 4 === 0 && cy % 100 !== 0) || cy % 400 === 0;
// console.log(isLeapYear ? "Leap Year" : "Not a Leap Year");

// assignment no 02
// qno 16
// let score = 80;
// let result = score >= 80 ? "pass" : "fail";
// console.log(result);

// qno 17
// optional chaining introduced in 2020 for access the nested object properety eg\
// let stu = {
//   firstname: {
//     name: "ahmed",
//   },
//   lastname: {
//     name: "ahmed",
//   },
//   education: {
//     level: "graduate",
//   },
//   gender: {
//     sex: "male",
//   },
//   contact: {
//     email: "xyz@gmail.com",
//   },
// };

// console.log(stu?.contact?.email);

// qno 18
// for in vs for of loop
// for of only access the value in array and objects
// let x = [1, 2, 3, 5, 8, 76, 4, 7, 8, 5, 69, 12];
// for (let index of x) {
//   console.log("elements in x  " + index);
// }

// for in provide the index number in an array and also they provide the object value

// let x = [1, 2, 3, 5, 8, 76, 4, 7, 8, 5, 69, 12];
// for (let index in x) {
//   console.log("elements in x  " + index);
// }
// let person = {
//   name: "ahmed",
//   contact: "abc@gmail.com",
//   address: "nagan",
// };
// for (let p in person) {
//   console.log(p);
// }

// qno 19

// function calcavg(numbers) {
//   if (numbers.length === 0) {
//     return 0;
//   }
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum = sum + numbers[i];
//   }
//   let avg = sum / numbers.length;
//   return avg;
// }
// let numarray = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let k = calcavg(numarray);
// console.log(k);

// qno 20
// closure in js and lexical scopingkl

// function createcounter() {
//   let count = 0;
//   return function () {
//     count++;
//     console.log(count);
//   };
// }
// let counter = createcounter();
// counter();
// counter();
// counter();
// counter();

// qno 21
// const person = {
//   name: "nazli",
//   school: "happy home",
//   grade: [120, 10, 20, 50, 70, 90, 82, 50, 20],
//   calcavg: function () {
//     let sum = this.grade.reduce((total, grade) => total + grade, 0);
//     return sum / this.grade.length;
//   },
// };
// let avg = person.calcavg();
// console.log(`the avg of student is ${avg}`);

// qno 22
// clone of an object
// let p = {
//   name: "ahmed",
//   age: 20,
//   cellno: 12,
// };
// let h = {
//   name: "leo",
//   age: 58,
//   address: "north korea",
// };
// let f = p;
// f.name = "khurram";
// let k = Object.assign({}, p, h);
// k.name = "khurran";

// let m = { ...p };
// m.name = "mm";
// console.log(p);
// console.log(k);
// console.log(m);
// spread operator is also used to copy the object
// here is a problem they change the name of p to resolve it we use a shallow copy of an object by using .assign({},jismein change mhi cahtee uska refrebce dedonga )
// we resolve it and change the name of an object k by using objetc.assign
// clone of different objects nhi bnnjaty hein lakinsame property mein 1st object ki key value consider hooti hai

// shallow copy

// let p = {
//   name: "ahmed",
//   address: {
//     city: "karachi",
//   },
// };

// let p1 = JSON.stringify(p);
// p1 = JSON.parse(p);
// p.address.city = "islamabad";

// console.log(p1);
// refrence copy
// <===============================================================>

// qno 23
let a = [1, 2, 3, 4, 5, 67, 8, 9, 10, 11, 20, 30, 74, 50, 60, 70, 100];
a.forEach((a) => {
  let res = a % 2 === 0 ? "even " : "odd";
  console.log(`${a} is ${res}`);
});

// q no 24
// for loop : when you know about the numbers of iterations
// while loop when you donot about theb no of iterartions but know about the loop should be continue until the condition is true
// do while same is while loop but 1st run the block of code and check condition

// q n0 25
let detail = [
  { name: "ahmed", city: { cname: "karachi" } },
  { name: "ahmed" },
  { name: "ahmed", city: { cname: "karachi" } },
];

for (let details of detail) {
  let cityname = details?.city?.cname || "unknown";

  console.log(`${details.name} city is ${cityname}`);
}
