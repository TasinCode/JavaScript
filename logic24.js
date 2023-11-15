//media events : audio/ video events
// canplay, play, playing, pause, progress, ended, volumechange, waiting

const video = document.querySelector("video");
video.addEventListener("canplay", function(){
    console.log("canplay");
});

video.addEventListener("play", function(){
    console.log("play");
});

video.addEventListener("pause", function(){
    console.log("pause");
});

video.addEventListener("playing", function(){
    console.log("plaing");
});

video.addEventListener("ended", function(){
    console.log("Thanks for watching");
});

video.addEventListener("volumechange", function(){
    console.log("volumechange");
});


//load, unload
//scroll
//resize
//toggle


window.addEventListener("load", function(){
    connsole.log("load");
});

window.addEventListener("unload", function(){
    connsole.log("unload");
});


window.addEventListener("scroll", function(){
    connsole.log("scroll");
});


window.addEventListener("resize", function(){

    const width = window.outerWidth;
    const height = window.outerHeight;
    connsole.log(`height: ${height}, width: ${width}`);
});


const details = document.querySelector("details");

details.addEventListener("toggle", function(e){
    console.log(e.target.open);
});