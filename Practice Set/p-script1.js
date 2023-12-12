// 1st Practice

let a = "Tasin Islam"
let b = 5

console.log(a+b);

// 2nd Practice

console.log(typeof (a+b))

//3rd Practice

const a1 = {
    name: "Tasin",
    section: 20,
    isPrinciple: false,
}

// a1= "Tasin" // not possible for declaring a1 variable already

a1['friend'] = "Fahim"
a1['name'] = "Tasin Islam"

console.log(a1);

const dict = {
    fickle:  "changing frequently",
    temperamental: "liable to unreasonable changes of mood",
    natural: " preservative treatment",
    baseborn: " low birth or origin"
}

console.log(dict.natural);



let c = prompt("hello?");
c = Number.parseFloat(c);

if(c<9){
    alert("Shut Up!");
} else if(c>9 && c<18){
    alert("Be Patient!");
} else {
    alert("Done!");
}