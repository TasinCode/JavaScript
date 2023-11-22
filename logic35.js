// Object Literals

function studentInfo (name, age){
    return{
        // name : name,
        // age : age

        name,
        age
    }

}

console.log(studentInfo("Tasin Islam", 27));

let message = {
    // body : function(){
    body(){
        return `Hello World, I am Tasin`
    }
}

console.log(message.body())

let message2 = {
    'body name'(){
        return `Hi!! I am Tasin Islam`
    }
}

console.log(message2['body name']())


// For...of and For...in loop

// For...of loop
const names = ["s1", "s2", "s3"]
for(let name of names){
    console.log(name)
}


// For...in loop

let students = {
    ID : 125,
    name : 'Tasin Islam',
    cgpa : 3.91
}

for(let x in students){
    // console.log(students[x])
    // console.log(x)
    console.log(`${x} : ${students[x]}`)

}

  // for loop array vs foreach

  var numbers = [1,2,3,4,9,10,15];

  for(var x=0; x<numbers.length; x++){
      console.log(numbers[x]);
  }


  //  foreach

  var numbers = [9,10,15,3,4,5,2];
  numbers.forEach(function(x){
    console.log(x)
  })
  

  var numbers1 = [9,10];
  var squareNumbers = [];

  numbers1.forEach(function(x){
    squareNumbers.push(x*x);
  })
  console.log(squareNumbers)


  var num = [10,30,3];
  console.log(num);

  num.forEach(function(x,index,arr){
    arr[index]= x+5;

  })

  console.log(num);