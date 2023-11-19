// JS BOM
// JS Timing events methods
// setTimeOut(), setInterval()


// setTimeOut()

// setTimeout(() => {
//     console.log("Hi");
// }, 5000);

// setTimeout(display, 3000);

// function display(){
//     console.log("display");
// }

const saveButton = document.querySelector(".save-btn");
const message = document.querySelector(".message");

saveButton.addEventListener("click", saveUser);

function saveUser() {
message.textContent = "User Registration Successful";

setTimeout(() => {
    message.textContent = " ";
}, 2000);
}

// setInterval()

saveButton.addEventListener("click", displayCount);

function displayCount(){
    let count = 0;
    message.textContent = count;

    setInterval(() =>{
        count++;
        message.textContent = count;
    }, 3000);
}


saveButton.addEventListener("click", startClock);

function startClock(){
    let date    =  new Date();
    let hours   =  date.getHours();
    let minutes =  date.getMinutes();
    let seconds =  date.getSeconds();

    minutes = formatTime(minutes);
    seconds = formatTime(seconds);


    let time =  hours + ":" + minutes + ":" + seconds;

    message.textContent = time;

    setInterval(startClock, 1000);

}

function formatTime(value){
 if (value < 10){
    value = "0" + value;
 }
 return value;
}