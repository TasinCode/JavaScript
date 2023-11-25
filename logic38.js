// Array Destructure

let numbers = [10,20,30,40,50]
let [num1,num2,num3,num4,num5] = numbers // Array Destructure

let [num6,num7,...z] = numbers
console.log(num1,num2)
console.log(z)


// Swap Variable

let a=10, b=20;
[a,b] = [b,a]

console.log(a);
console.log(b);


// Object Destructure

const studentInfo1 = {
    id: 101,
    name: 'Tasin Islam',
    cgpa: 3.03
}

const {id,name,cgpa} = studentInfo1;
console.log(id)
console.log(name)
console.log(cgpa)

// Nested Object Destructure

const studentInfo2 = {
    no: 102,
    fullname: 'Tasin',
    gpa: 3.25,
    languages: {
        native : 'Bangla',
        Beginner : 'English'
    }
}

const {no,fullname,gpa, languages} = studentInfo2;
console.log(fullname);
console.log(languages.native);


// Destructuring function parameters

const students = ({id, name}) =>{
    console.log(`${id}, ${name}`)
}

const student = {
    id: 123,
    name: 'Fahim'
}

students(student)
