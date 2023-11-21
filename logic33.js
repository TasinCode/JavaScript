// // variable declare with let keyword, its useful when we use loop

// let x1 = 11;
// for(let x1=1 ; x1 <= 10; x1++){

// };
// console.log(x1);

// // variable declare with (constant) const keyword, we can't change the value

// // const x2 = 11;
// // if(true){
// //     x2=10;
// // }
// // console.log(x2);

// // string concatenation in ES6

// let x = 25;
// let y = 30;

// let sum = x + y;

// // console.log(`sum is ${x+y}, Hello World!`);
// console.log(`sum is ${sum}, Hello World!`);

// // Another Example

// let name = "Tasin Islam";
// let message = `Hello World, I am ${name}. Welcome me in the Programming World!`;

// console.log(message);

// //Function declare in ES6

// add(10,50);
// // //normally
// // function add(x,y){
// //     var sum = x+y;
// //     console.log(sum);
// // }

// //ES6 function declare
//   const add = (x,y) => {
//     let sum = x + y;
//     console.log(sum);
// }


// default hoisting

x=20;
if (true){
  y=10;
  console.log(`y = ${y}`);
  var y;
}
console.log(`x = ${x}`);
var x;

// but if we use let or const keyword for variable default hoisting wil not work, like as:
// x = 20;
// console.log(x);
// let x; const x;


// Strict Mood using for Accurate coding

"use strict"
x=20;
console.log(`x = ${x}`);