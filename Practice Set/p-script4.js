//  Problem- 1

let str = "Tas\""
console.log(str.length)

//  Problem- 2

const sentence = "I am Tasin Islam";
const word = 'TASIN';

console.log(sentence.includes(word));


//  Problem- 3

console.log(word.toLowerCase())


//  Problem- 4

let str2 = "Please give tk 200000";
let amount = str2.slice("Please give tk".length)
console.log(amount);

let amount2 = Number.parseFloat(str2.slice(15));
console.log(typeof amount2);

//  Problem- 5

let name = "Tasin";
name[3] = "A";

console.log(name) // name is not changable because string is immutable. but we can replace it at new string
