//Downwards

// 1. querySelector()/querySelectorAll
const studentList = document.querySelector(".students-list");
const studentA = studentList.querySelector(".student-a");

// 2. children
const studentList = document.querySelector(".students-list");
const studentA = studentList.children[0];

//Upwards
// 1. parentElement
const studentA = document.querySelector("li");
const studentList = studentA.parentElement;


//Sideways
// 1. nextElementSibling, previousElementSibling
const studentA = document.querySelector("li");
const studentB = studentA.nextElementSibling;
const studentC = studentA.nextElementSibling;


const studentC = document.querySelectorAll("li")[2];
const studentB = studentC.previousElementSibling;

// 2. parentElement + children + index
const studentA = document.querySelector("li");
const studentList = studentA.parentElement;
const studentC = studentsList.children[2];