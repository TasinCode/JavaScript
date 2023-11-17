const textarea = document.querySelector("textarea");


// Keydown

textarea.addEventListener("keydown", function(e){
    // console.log("Keydown");
    if(e.repeat){
        alert("Do not repeat");
    }
});


//Keypress

textarea.addEventListener("keypress", function(){
    console.log("Keypress");
});


//Keyup

textarea.addEventListener("keyup", function(e){
    //console.log("Keyup");
    // console.log(e.keyCode);
    // console.log(e.code);

    if(e.shiftKey){
    console.log("shift " + e.key);
    }
});



//FocusEvent Object
//Not work with <br>,<head>, <title>,<html>, <iframe>, <meta>, <param>, <script>, <style>,<base>, <bdo>

//onblur

const input = document.querySelector("input");
input.addEventListener("blur", function(e){
    // console.log("Blur");
    // console.log(e.target.value);

    // input.style.backgroundColor = "blue";
    // input.style.padding = "0";

    input.value = e.target.value.toUpperCase();

});


//onfocus

input.addEventListener("focus", function(){
    // console.log("Focus");

    input.style.backgroundColor = "orange";
    input.style.padding = "2rem";

});

//onfocusin

input.addEventListener("focusin", function(){
    console.log("Focusin");
});

//onfocusout

input.addEventListener("focusout", function(){
    console.log("Focusout");
});