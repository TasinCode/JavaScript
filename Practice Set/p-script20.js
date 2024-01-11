// Problem 1 & 2

class Number {
    constructor(rpart, ipart){
        this.real = rpart;
        this.imaginary = ipart;
    }

  add(num){
    this.real = this.real + num.real;
    this.imaginary = this.imaginary + num.imaginary;
  }

// Problem 5
  get real(){
    return this._real
  }

  get imaginary(){
    return this._imaginary
}

set real(newReal){
    this._real = newReal
}
set imaginary(newImaginary){
    this._imaginary = newImaginary
}

}

let complexNumber1 = new Number(5,2);
complexNumber1.real = 10
complexNumber1.imaginary = 10
let complexNumber2 = new Number(4,3);
complexNumber1.add(complexNumber2)
console.log(`${complexNumber1.real} + ${complexNumber1.imaginary}i`)


// // Problem 3

// class Human{
//     constructor(name, favfood){
//      this. name = name;
//      this.favfood = favfood;   
//     }  
    
//     walk(){
//        console.log(`${this.name} Human is Walking`) 
//     }
// }

// class Student extends Human{
//     walk(){
//         console.log(`${this.name} Student is Walking`) 
// }
// }
// let o = new Student("Tasin", "Fahim")
// o.walk()

// // Problem 4

// console.log(o instanceof Human);



