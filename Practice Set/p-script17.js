let l1 = async()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Initializing Hack program...")
        }, 1000)
    })
}
let l2 = async()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Hacking Fahim's username...")
        }, 3000)
    })
}
let l3 = async()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Username found fahim2043...")
        },4000)
    })
}
let l4 = async()=>{
    return new Promise((resolve,reject) =>{
        setTimeout(()=>{
            resolve("Connecting to facebook...")
        }, 7000)
    })
}


const hack = async()=>{
    let h1 = l1();
    let h2 = l2();
    let h3 = l3();
    let h4 = l4();
    let h1h2h3h4 = await Promise.all([l1,l2,l3,l4] );
    
    console.log(h1,h2,h3,h4)
}

hack()