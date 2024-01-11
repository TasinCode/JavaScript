submit.addEventListener("click", (e)=> {
    e.preventDefault()
    let titlec = title.value
    let desc = des.value
    localStorage.setItem("todo", JSON.stringify([titlec, desc]))
    console.log(e)

    todo.innerHTML = `
    <h1> ${titlec} </h1>
    <p> ${desc} </p>
    `
    title.value = ""
    des.value = ""
})

deleteBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    localStorage.removeItem("todo")

    todo.innerHTML = ` `
})