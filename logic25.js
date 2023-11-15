// MouseEvent- ***not work with*** <html> <head>, <meta>, <title>, <br>, <style>, <script>, <iframe>, <param>, <base>, <bdo>




//onclick

console.clear();

const div = document.querySelector("div");

div.addEventListener("click",function(e){
    console.log(e.target);
    console.log(e.target.id);
    console.log(e.target.className);
    console.log(e.target.innerHTML);
    console.log(e.target.innerText);

});


const buttons = document.querySelectorAll(".btn");

Array.from(buttons).map((button)=> {
    button.addEventListener("click", function(e){
        console.log("clicked");
        console.log(e.target.innerText);

    });
});





//double click

div.addEventListener("dblclick",function(){
    console.log("double clicked");
});

//Mouse Down

div.addEventListener("mousedown",function(){
    console.log("Mouse Down");
});

//Mouse Up

div.addEventListener("mouseup",function(){
    console.log("Mouse Up");
});

//Mouse Enter

div.addEventListener("mouseenter",function(){
    console.log("Mouse Enter");
});

//Mouse Up

div.addEventListener("mouseleave",function(){
    console.log("Mouse Leave");
});

//Mouse Over

div.addEventListener("mouseover",function(){
    console.log("Mouse Over");
});

Mouse Move

div.addEventListener("mousemove",function(e){
    //console.log("Mouse Move");

    // console.log("clientX = "+ e.clientX + ", clientY = "+ e.clientY );

    console.log("offsetX = "+ e.offsetX + ", offsetY = "+ e.offsetY );
});

