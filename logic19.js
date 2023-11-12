function addStyle(){
var paraStyle = document.querySelector("#paraId");
paraStyle.classList.add("para-style"); //from css file
// paraStyle.style.color = "red";
// paraStyle.style.fontSize = "3rem";
// paraStyle.style.fontWeight = "bold";
// paraStyle.style.fontStyle = "italic"
}

function rmvStyle(){
    var paraStyle = document.querySelector("#paraId");
    paraStyle.classList.remove("para-style");
}

//Event Listner

document.querySelector("#btn").addEventListener("click", function myFunction(){
    alert("Hello");
});


// function myFunction(){
//     alert("Hello");
// }


var myVar = document.querySelector("h1");

myVar.addEventListener("click",myFunc);

function myFunc(){
    alert("Hello Tasin!"); 
}


var myV = document.querySelector("h2");

myV.addEventListener("mouseover",function myFun(){
    myV.classList.add("my-style");
});



myV.addEventListener("mouseout",function myFun(){
    myV.classList.remove("my-style");
});



//Multiple Event Listener
var len = document.querySelectorAll(".myButton").length;
for(var x=0; x<len; x++){
document.querySelectorAll(".myButton")[x].addEventListener("click", function(){
    var text = this.innerHTML;
    document.querySelector("#head1").innerHTML = text + "is clicked";
});
}
