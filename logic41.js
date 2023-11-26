// callback and higher order function

function square(x){
    console.log(`square of ${x}: ${x*x}`);
}

square(5);

// const y = square;

// y(5);

function higherOrderFunction(num, callback){
    callback(num);
}

higherOrderFunction(6,square)




const taskOne = (callback) => {
    console.log("Task1");
    callback();
};

// Asynchronus

const dataLoading = () => {
    
};

const taskTwo = (callback) => {
    setTimeout(()=>{
    console.log("Task2.Data Loading");
    callback();
},3000);
};
const taskThree = (callback) => {
    console.log("Task3");
    callback();
};

const taskFour = (callback) => {
    console.log("Task4");
    callback();
};

const taskFive = (callback) => {
    console.log("Task5");
    callback();
};

taskOne(()=>{
    taskTwo(()=>{
        taskThree(()=>{
            taskFour(()=>{
                taskFive(()=>{
                   return 0; 
                });
            });
        });
    });
});




console.log("Hi")

 document.querySelector("button").addEventListener("click", ()=>{
    console.log("Hello World");
 });

 console.log("Bye")