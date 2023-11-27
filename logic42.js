// Promise - pending, resolve, reject

const promise1 = new Promise((resolve, reject)=> {
    let completedPromise = true;
    if(completedPromise){
        resolve('completed promise 1');
    }else{
        reject('Not completed promise 1'); 
    }
});



const promise2 = new Promise((resolve, reject)=> {
    resolve('Completed Promise 2');
});

promise1.then((res) => {
    console.log(res);
})
.catch((err) => {
    console.log(err);
});

promise2.then((res) => console.log(res));

Promise.all([promise1,promise2]).then((res) => console.log(res));

console.log("end");


// promise race


const promise3 = new Promise((resolve, reject)=> {
   setTimeout(()=>{
    resolve("completed1")
   }, 2000);
});



const promise4 = new Promise((resolve, reject)=> {
    setTimeout(()=>{
    resolve("completed2")
   }, 1000);
});



Promise.race([promise3,promise4]).then((res) => console.log(res));

console.log("end");



// promise chaining

 
const taskOne =() => {
    return new Promise((resolve, reject) => {
        reject("task 1 is not completed");
    });
};

const taskTwo =() => {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            resolve("task 2 is completed");
        },3000);
        
    });
};

const taskThree =() => {
    return new Promise((resolve, reject) => {
        resolve("task 3 is completed");
    });
};

const taskFour =() => {
    return new Promise((resolve, reject) => {
        resolve("task 4 is completed");
    });
};

taskOne()
.then((res) => console.log(res))
.then(taskTwo)
.then((res) => console.log(res))
.then(taskThree)
.then((res) => console.log(res))
.then(taskFour)
.then((res) => console.log(res))

//if reject

.catch((err) => console.log(err));