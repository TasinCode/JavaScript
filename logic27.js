// //clipoardEvent Object

// //oncopy

// const input = document.querySelector("input");
// const p =document.querySelector("p");

// input.addEventListener("copy", function(){
//     console.log("Copy");
//     p.innerText = "Copy";
// });

// //oncut

// input.addEventListener("cut", function(){
//     console.log("Cut");
//     p.innerText = "Cut";
// });

// //onpaste

// input.addEventListener("paste", function(){
//     console.log("Paste");
//     p.innerText = "Paste";
// });



//DragEvent Object


const div = document.querySelector("div");
const p = document.querySelector("p");


//onDragStart

p.addEventListener("dragstart", function(e){
   e.dataTransfer.setData("Text", e.target.id); 
}); 


//onDragOver

div.addEventListener("dragover",function(e){
    e.preventDefault();
});

//onDrop

div.addEventListener("drop",function(e){
    let id = e.dataTransfer.getData("Text");
    div.appendChild(document.getElementById(id));
    e.preventDefault();
});


//onDrag

//onDragend

//onDragEnter

//onDragLeave



