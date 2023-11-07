//Array is an object; collection of variables


var names = new Array(5);
names[0] = "Tasin";
names[1] = "Fahim";
names[2] = "Islam";
names[3] = "Hello";
names[4] = "Hi";
document.write(names);
document.write("<br>"+names.length);
document.write("<br>"+names[0]);
document.write("<br>"+names[2]);



var n = ["Tasin", "Islam", "Fahim"];
document.write( "<br>"+ n.length );
document.write( "<br>"+ n);


var n = ["Tasin", "Islam", "Fahim"]; 
n.push("Tulon"); //push function in array
n.push("Tu"); 
n.push("lon"); 
n.push("Tn"); 
console.log(n);

n.pop(); //pop function in array
console.log(n);

n.pop(); //pop function in array
console.log(n);


var country1 = ["BD", "PK"];
var country2 = ["NP", "IND"];


var country = country1.concat(country2); // concatination library function in array 
console.log(country);


//Array Methods( Shift, Unshift, Splice, sort, reverse)


var naam = ["Tasin"," Islam", "Fahim"];

console.log(naam);

//shift id opposite of pop
naam.shift();
console.log(naam);

//unshift is opposite of push
naam.unshift("Tasin");
console.log(naam);

// Splice adding

 naam.splice(2,1,"Hello", "BD");
 console.log(naam);


// Splice removing

 naam.splice(2,1);
 console.log(naam);
 

 //slice
 var newArray = naam.slice(1);
 console.log(newArray);

 //sort

 var sortedNames = naam.sort();
 console.log(sortedNames);



 //reverse

 var reverseNames = naam.reverse();
 console.log(reverseNames);


 //number sorting & reversing

 var numbers = [20, 5, 6, 3, 80]

 numbers.sort(function(a,b){
    return a-b; // for reverse use b-a
 });
 document.write("<br>"+numbers);