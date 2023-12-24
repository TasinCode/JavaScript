let user = prompt("From 'S,W,G' choose one letter for starting the game")
let cpuRan = Math.floor(Math.random() * 3);
let cpu = ["S","W","G"][cpuRan];


const match = (cpu,user) => {
    if(cpu === user){
        return "The match is tied";
    } else if(cpu == "S" && user == "W"){
        return "cpu";
    } else if(cpu == "S" && user == "G"){
        return "user";
    } else if(cpu == "W" && user == "G"){
        return "cpu";
    } else if(cpu == "W" && user == "S"){
        return "user";
    } else if(cpu == "G" && user == "S"){
        return "cpu";
    } else if(cpu == "G" && user == "W"){
        return "user";
    }
}

let result = match(cpu, user);

document.write(`User: ${user} <br> CPU: ${cpu} <br> The winner is: ${result}`);