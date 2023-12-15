// Problem-1 : marks in for loop

let marks = {
    tasin: 90,
    fahim: 70,
    tulon: 45,
    bilal: 95,
}

for(let i=0; i<Object.keys(marks).length; i++){
    console.log("The marks of " + Object.keys(marks)[i] + " is " + marks[Object.keys(marks)[i]])
};

// Problem-2 : for in loop

for(let key in marks){
    console.log("The marks of " + key+ " is " + marks[key])
};


// Problem-3 : 
let cn = 43;
let i;
while(i != cn){
    console.log("Hello")
    i = prompt("Enter a number: ")
};

console.log("Enter a correct number!")


// Problem-4 : 

const mean = (a,b,c,d) => {
    return(a+b+c+d)/4;
}

console.log(mean(1,2,3,4));
