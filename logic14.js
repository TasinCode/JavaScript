// getElementById
// getElementsByClassName
// getElementsByTagName
// querySelector()

var myheading = document.getElementById("heading1");

myheading.innerHTML = "Hello";

document.getElementById("para").innerHTML = " Hello World, I am Tasin Islam.";

document.getElementById("heading2").innerHTML = "Yeah It's Tasin's World!";

document.getElementsByClassName("h3")[0].innerHTML = "Hi World!";

document.getElementsByTagName("h4")[0].innerHTML = "Bangladesh!!";


document.querySelector("#pid").innerHTML ="This id is changed";

document.querySelector(".pid").innerHTML ="This class is changed";

document.querySelector(".pid").innerHTML ="This class is changed";

document.querySelector("p").innerHTML ="This tag is changed";


document.querySelector("a").innerHTML = "Changed";

document.querySelector("li a").innerHTML = "Changed";

document.querySelector("div a").innerHTML = "Changed";

document.querySelector(".my-div a").innerHTML = "Changed"; 


document.querySelectorAll("p")[4].innerHTML = "This is a text";

document.querySelectorAll("p")[5].innerHTML = "This is a text";