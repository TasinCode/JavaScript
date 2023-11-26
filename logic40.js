import {text, setText} from './myModule40.js'

console.log(text)
setText("Goodbye from Tasin's World")
console.log(text)

// we can easily change the variable name by export or import modules.

// like as: export(text as message) or import(message as text)




//ES6 Class

class Student {
    constructor(id, name){
        this.id = id;
        this.name = name;
    }


    
set studentName(name){
    this.name = name;
}

get studentInfo(){
    return this.id + "" + this.name;                      
}
}

let s1 = new Student(101, "Tasin");
console.log(s1)
console.log(s1.id)
console.log(s1.name)

s1.studentName= "Hello";
console.log(s1.name)

console.log(s1.studentInfo)


