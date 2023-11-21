// ES6 Default and Rest Parameter

"use strict"
function message(text = "Hello This is Default Parameter"){
    console.log(`${text}`);
}
message();
message("I love JS ES6");

// Rest Parameter

function sum (x,y,...z){ //rest parameter syntex
    console.log(`x = ${x}, y = ${y}, z = ${z}`)
}

sum(10,20,30,40,50,20);


// Spread Operator

function addNumbers(x,y,z){
    return x + y + z;
}

let numbers = [1,2,3];

// console.log(`The Number is ${addNumbers(numbers[0], numbers[1], numbers[2])}`); 

console.log(`The Number is ${addNumbers(...numbers)}`); 

let numbers1 = [5,7,...numbers,9]
console.log(numbers1);

let numbers2 = [11,12,13];
let concatNumber = numbers.concat(numbers2);
console.log(concatNumber);

// or

let numbers3 = [14,15,16];
let number = [...numbers, ...numbers3];

console.log(number);

// Spread Operator in object

let p1 = {
    name: "Tasin Islam",
    age: 27
}

let p2 = {
    nationality: "Bangladeshi",
    occupation: "Student"
}

let p = {...p1, ...p2};

console.log(p);