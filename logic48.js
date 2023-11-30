// Web Storage API- allow us to store & read data in browser
// Web storage API - localStorage, sessionStorage

// localStorage - store, read, update and remove data
// no expiry date: data never gets lost even if you close the browser


// Local Storage store data as key value pair string

// setItem(key,value)

// localStorage.setItem("userName", "Tasin Islam");
// localStorage.setItem("userPassword", "1234567890");


// // getItem(key)
// const userName= localStorage.getItem("userName");
// const userPassword= localStorage.getItem("userPassword");
// console.log(userName, userPassword);


// // update item

// localStorage.setItem("userName", "Fahim Islam");
// localStorage.setItem("userPassword", "17890");



// // removeItem(key)

// localStorage.removeItem("userName");
// localStorage.removeItem("UserPassword");



// setItem(key,value)

const countries =["India", "Bangladesh", "Nepal"];
localStorage.setItem("countries", JSON.stringify(countries));
localStorage.setItem("userPassword", "1234567890");


// getItem(key)

const countriesList = JSON.parse(localStorage.getItem("countries"));
console.log(countriesList);

localStorage.clear();


// localStorage vs sessionStorage
// 10mb vs 5mb
// permanent vs session (tab)


sessionStorage.setItem("user", "Tasin");
const userName = sessionStorage.getItem("user");
console.log(userName);

sessionStorage.removeItem("user");
sessionStorage.clear();



const user = {id: "101", name: "Tasin"};
sessionStorage.setItem("user",JSON.stringify(user));

const userInfo = JSON.parse(sessionStorage.getItem("user"));
console.log(userInfo);


// cookies
// 4kb only

document.cookie = "username=tasin; expires= Mon, 30 Nov 2023 11:26 GMT";

console.log(document.cookie);