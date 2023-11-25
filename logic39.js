// find(callback, value) return the value of the first element that pass certain condition

let numbers1 = [5,55,8,3,10];
let firstEvenNumber1 = numbers1.find(x => x%2===0)

console.log(firstEvenNumber1)

// by declairing function

let numbers2 = [50,55,18,30,10];

const evenNumber =(value, index, array) => {
    if(value%2===0)
    return value;
}
let firstEvenNumber2 = numbers2.find(evenNumber);

let firstEvenNumberIndex2 = numbers2.findIndex(evenNumber);

console.log(firstEvenNumber2)
console.log(firstEvenNumberIndex2)


// find method with object

const students = [
    {
        id: 101,
        gpa: 2.5
    },

    {
        id: 102,
        gpa: 3.5
    },

    {
        id: 103,
        gpa: 4.5
    },

    {
        id: 104,
        gpa: 5
    }
]

console.log(students.find(x => x.gpa>4));


// startsWith(searching ,position) -> check a string with another string

const message = "Today is Friday";

console.log(message.startsWith('Today',0)) // if i gave 'today' or 1....10 index it will not work because it's case sensative


// endsWith(searching, length) -> check a string ends with another sring

console.log(message.endsWith('Friday')) 

//includes(searching, position) -> check if a string contains another string

console.log(message.includes('Tuesday')) 



// all these methods are case sensitive