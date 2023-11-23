function message1(){
    return "Hi";
}

// Arrow Function
const message2 = () => "Hello";
console.log(message1());

console.log(message2());



function add1(num1, num2){
    return num1+num2;
}

//Arrow Function

const add2 = (num1, num2) => num1+num2;

console.log(add1(10,10));
console.log(add2(40,10));



//

var students = [
    {
        id: 101,
        name: 'Tasin',
        gpa: 3.03
    },

    {
        id: 102,
        name: 'Fahim',
        gpa: 2.63
    },
    
    {
        id: 103,
        name: 'Tulon',
        gpa: 3.52
    },
     
    {
        id: 104,
        name: 'Islam',
        gpa: 2.85
    },
]


function studentName1 (){
       return students.filter(function(x){
       return x.gpa > 3
    }).map(function(y){
        return y.name;
    });
}

const studentName2 = () => students.filter((x) => x.gpa<3).map((y) => y.name);

console.log(studentName1());
console.log(studentName2());


