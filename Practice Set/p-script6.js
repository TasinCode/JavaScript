//  Guess the Number


let x = Math.floor(Math.random() * 100)+1;
let g;
let a = 100;

while(g != x){
    a = a-1
    g = prompt("Guess a Number between 1 and 100!");

    if(g == x){
        console.log("Your Number was " + g +" that is equal to "+ x +" so the guess was correct! and you guess the number in "+ (100-a) +" chances");
    } else if(g > x && g <= 100){
        console.log("Your Number was " + g +" that is greater than "+ x +" so the guess was greater!");
    } else if(g < x && g > 0){
        console.log("Your Number was " + g +" that is lower than "+ x +" so the guess was lower!");
    } else {
        console.log("Enter number between 1 to 100");
    }
}



