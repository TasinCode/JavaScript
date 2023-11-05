
for(var x = 1; x <= 2; x= x+1){
    document.write("<br> <h1> Welcome to Tasin's World </h1> ")
}

var sum = 0;

for(var x = 1; x <= 10; x= x+1){

    sum = sum + x;
    
}

document.write(sum);

var m = parseFloat(prompt("Enter your first value: "));
var n = parseFloat(prompt("Enter your second value: "));
var sum = 0;

for(var x = m; x <= n; x= x+1){
    sum = sum + x;
}

document.write("<br> Total: " + sum);


var i = 1; 

while(i<=10) {
     document.write(" " + i);
     i = i + 1;
}


// 1 + 2 + 3 + ........ + 10

var i = 1; 
 var sum = 0;

while(i <= 15) {
    
     sum = sum + i;
     i = i + 1;
}

document.write("<br>" + sum + "<br>");


// 1-100....even number

var i = 0;

while(i <= 99) {
    
     i = i + 2;
     document.write(i);
}

//Task 6

var i = 1;
var sum = 0;

while (i <= 100){

    if(i % 3 == 0 && i % 5 == 0) {
    document.write("<br> " + i);
    sum = sum + i;
    }
    i = i + 1;
    

}

document.write("<br> sum = " + sum);