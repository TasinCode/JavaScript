// // Problem-1

// const a = async (text) => {
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve (text)
//         }, 1000)
//     })
// }

// {
//     async() => {
//         let text = await a("Hello");
//         console.log(text);
//         text = await a("World");
//         console.log(text);

//         }
// }

// // Problem-2
// function sum(a,b,c) {
//     return a+b+c;
// }

// let x = [1,2,3]
// console.log(sum(...x))


// Alarm Clock

function play() {
    var audio = new Audio('https://interactive-examples.mdn.chrome.net/media/cc0-audio/t-rex-roar.mp3');
    audio.play();
}

setInterval(() => {
    let d = new Date();
    time.innerHTML = d.toDateString() + " " + d.toTimeString()
}, 1000)


const setAlarm = (seconds) => {
    let d = new Date().getTime()
    setTimeout(() => {
        play()
    }, seconds*1000)


setInterval(() => {
    secondsLeft = -(new Date().getTime() - (d + seconds*1000))
    if(secondsLeft > 0) {

        alarm.innerHTML = "Alarm ringing in " + Math.floor(secondsLeft /100) + "seconds"
    }
})

}


let s = prompt(`After how many seconds do you want an alarm?`)
setAlarm(parseInt(s))