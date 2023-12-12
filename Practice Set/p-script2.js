// Problem-1(Your age lies between 10 and 20)

let age = prompt("What is your age?");
age = Number.parseInt(age);
if(age>10 && age<20){
    console.log("Your age lies between 10 and 20");
} else{
    console.log("Your age doesn't lies between 10 and 20");
}

// Problem-2

let age1 = prompt("What's your age?")

switch(age1){
    case '12':
        console.log(" Your age is 12 ");
        break;

        case '13':
        console.log(" Your age is 13 ");
        break;

        case '14':
        console.log(" Your age is 14 ");
        break;

        case '15':
        console.log(" Your age is 15 ");
        break;

        case '16':
        console.log(" Your age is 16 ");
        break;

        default:
            console.log("Your age is not valid")
        
}

// Problem-3(your number is divisble by 2 and 3)

let num = prompt("Please input your number:")
num = Number.parseFloat(num)

if(num%2==0 && num%3==0){
    console.log("Your number is divisble by 2 and 3")
} else{
    console.log("Your number is not divisble by 2 and 3")
}

// Problem-4(Your number is not divisble by 2 or 3)

let num1 = prompt("Please input your number:")
num1 = Number.parseFloat(num1)

if(num1%2==0){
    console.log("Your number is divisble by 2")
} else if(num1%3==0){
    console.log("Your number is divisble by 3")
} else{
    console.log("Your number is not divisble by 2 or 3")
}

// Problem-5(turnary operator)

let age2 = prompt("What's your age?");
age2 = Number.parseFloat(age); 
let a = age2>18? "You can drive" : "You cannot drive"

console.log(a);