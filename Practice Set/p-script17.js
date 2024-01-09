let a = [
    "Initializing Hack program...",
    "Hacking Fahim's username...",
    "Username found fahim2043...",
    "Connecting to facebook...",
    "Hack Successful..."
]

const sleep = async(seconds) =>{
    return new Promise((resolve, reject)=> {
        setTimeout(() => {
            resolve(true)
        }, seconds * 1000)
    })
}
const showHack = async(message) => {
    await sleep(1)
    // console.log(message)
    text.innerHTML = text.innerHTML + message + "<br>"
}

(async() =>{
    for(let i=0; i<a.length; i++){
        await showHack(a[i])
        
    } 
})()