var name = "Tasin Islam";
var age = 25;
var cgpa = 3.3;
var lang = ["Bangla", "English", "Araic"];

// How to create an object
// how to print the value of an object
// adding a constructor

var student1 = {
    name : "Tasin Islam",
    age : "27",
    cgpa : "3.03",
    lang : ["bangla", "english", "arabic"]
}

var student2 = {
    name : "Tasin Islam",
    age : "26",
    cgpa : "3.35",
    lang : ["bangla", "english", "arabic"]
}

var student3 = {
    name : "Tasin Islam",
    age : "25",
    cgpa : "3.9",
    lang : ["bangla", "english", "arabic"]
}

console.log(student2.cgpa);


// adding a constructor

function Worker(name, age, id, lang){
    this.name = name;
    this.age = age;
    this.id = id;
    this.lang = lang;

    this.display = function(){
        document.write(this.name);
        document.write(this.age);
        document.write(this.id);
        document.write(this.lang);
    }
}

var worker1 = new Worker("Tasin Islam",27, 101, ["Bangla","English"]);
var worker2 = new Worker("Fahim Islam",27, 102, ["Bangla","English"]);
var worker3 = new Worker("Tasbih",27, 103, ["Bangla","English"]);
var worker4 = new Worker("Tasria",27, 104, ["Bangla","English"]);

// document.write(worker1.name);
// document.write(worker1.age);
// document.write(worker1.id);
// document.write(worker1.lang);
// document.write(worker2.name);
// document.write(worker3.name);

worker1.display();
worker2.display();
worker3.display();
worker4.display();