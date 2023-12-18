// Problem-1

let arr1 = [1,2,3,4,5,6,78];
let a = prompt(" Enter a number");

a = Number.parseInt(a);

arr1.push(a);
console.log(arr1)
 
// Problem-2

let arr2 = [1,2,3,4,5,6,98,88];
let a1;
do{
    a1 = prompt("Enter a number");
    a1 = Number.parseInt(a1);
    arr2.push(a1)
} while(a1 !=0);

console.log(arr2)

// Problem-3

let arr3 = [1,20,3,4,5,22,56,45,65];
let n3 = arr3.filter((x)=>{
    return x%10 == 0;
})

console.log(n3);


// Problem-4

let arr4 = [1,20,3,4,5,22,56,45,65];
let n4 = arr4.map((x)=>{
    return x*x;
})

console.log(n4);


// Problem-5

let arr5 = [1,2,3,4,5,6,7,8,9]
let n5 = arr5.reduce((x1,x2) => {
    return x1*x2;
})

console.log(n5);