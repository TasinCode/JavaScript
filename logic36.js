// forEach, Map, Filter

var numbers1 = [2,3,4,5,6];
var squareNumbers = [];

numbers1.forEach(function(x){
    squareNumbers.push(x*x);
});

console.log(squareNumbers);


//Map

var numbers2 = [12,13,24,45];
var squareNumbers = numbers2.map(function(x){
    return x*x;
});

console.log(squareNumbers);

//Filter

var numbers3 = [120,3,204,45,5,9,10,25,36,4,58,2];
var newNumbers = numbers3.filter(function(x){
    return x>=10;
});

console.log(newNumbers);

