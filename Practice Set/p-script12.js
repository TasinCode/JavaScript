//  Digital Clock

// let a = new Date()
// let h = a.getHours();
// let m = a.getMinutes();
// let s = a.getSeconds();
// let d = a.getDate();

setInterval(()=>{
    let d = new Date()
    time.innerHTML = d;
},1000);
