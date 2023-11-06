var num = 5;
var result = num**2;

document.write("Result = " + result + "<br>");



// Creating a Function

function square(num1, num2){ // num = Parameter
    var result = num1**2 + num2;

    document.write("Result = " + result + "<br>");
}

//calling a function

square(2,5);
square(5,6);
square(7,9);


// using return in a function

function abc(n1, n2){
    var final = n1 + n2;
    return final;
}

// calling a function

var x = abc(50,65);
document.write(x);

//IIFEs (Immediately Invokeable Function Expressions)

(function display(){
    console.log("Allahu Akbar");
})();


(function display(message){
    console.log(message);
})("I am fine");


// Task7 sum of two numbers by using IIFEs
(function display(sum){
    console.log(sum);
})(5+5);


//Function Expressions
var display2 = function displayMessage(msg){
    console.log(msg);
}
display2("Alhamdulillah");

