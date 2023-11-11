var head1 = document.getElementsByTagName("h1")[0];
head1.innerHTML= "Say Hello";

// Creating html Element

var head3 = document.createElement("h1");

var text = document.createTextNode("This is Tasin Islam");

head3.appendChild(text);

var div = document.getElementById("my-div");
div.appendChild(head3);


// // Removing html Element

// var head2 = document.getElementsByTagName("h2")[0];

// div.removeChild(head2);

// Creating html Element on the top


var head0 = document.createElement("h1");

var text0 = document.createTextNode("This is heading0");

head0.appendChild(text0);

var head3 = document.getElementsByTagName("h1")[0];

div.insertBefore(head0,head3);