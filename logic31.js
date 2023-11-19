// //Best Practices in JS
// // Use camelCase for naming => firstName(camelCase)

// // variable declaration on top and initialize
// let firstName, lastName, fullName, userInfo;

// firstName = "Tasin";
// lastName  = "Islam";

// // avoid unnecessary variables
// fullName = firstName + lastName;

// // switch, case, must use (default)

// switch(key){
//     case value:
//         break;

//     default: //(must use default)
//         break;
// }

// //object and array must use const
// const names = ["Tasin", "Islam"];
// console.log(typeof names);

// //comparison == vs ===

// // == only check value
// // === check value and datatype both

// //access dom less otherwise will slow

// const ol = document.querySelector(".students-list");
// const firstOl = ol.children[0];
// console.log(firstOl);





// Error Handling -> try, catch, finally, throw


// try .... catch handle run time errors(Program which is)
// Error object
// The Finally statement -> execute code, after try and 

// alert("Hello");
// alert(x); //(thats why we need to use error handling)
// alert("Bye Bye")

try{

    // code test

    alert("Hi Everyone");
    alert(d);
    

}catch(err){

    // handle error

    console.log("Inside catch block");
    console.log(err);
    // console.log(err.name);
    // console.log(err.message);
}finally{
    alert("Bye Bye");
}


document.querySelector("#checkButton").addEventListener("click", function(){
    var num = document.querySelector("#numTextfield").value;
    // console.log(num);

    try{
        if(num < 5){
            throw "input is too low"
        }else if(num > 10){
            throw "input is too big"
        }else{
            console.log(num);
        }

    }catch(err){
        console.log(err);
    }
});

