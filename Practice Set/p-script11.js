// // Problem-3

// document.getElementById("google").addEventListener("click", function(){
//     window.location = "http://www.google.com";
// });

// // Problem-4

// const fetchContent = async (url) => {
//     con = await fetch(url);
//     let a = await con.json()
//     return a;
// }

// setInterval(async function(){
//     let url = "https://jsonplaceholder.typicode.com/todos/1"
//     console.log(await fetchContent(url))
// }, 1000);

// Problem-5

setInterval(async function(){
    document.querySelector("#bulb").classList.toggle("bulb");
}, 400);