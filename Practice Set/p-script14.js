async function weather(){
    let dhakaWeather = new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve("18 degree")
        }, 2000);
    })

    let sylhetWeather = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("21 degree")
        }, 7000);
    })

    // dhakaWeather.then(alert)
    // sylhetWeather.then(alert)

    console.log("Fetching Dhaka weather Please Wait....")
    let dWeather = await dhakaWeather;
    console.log("Fetched Dhaka Weather: " + dWeather);

    console.log("Featching Sylhet weather Please Wait....");
    let sWeather = await sylhetWeather;
    console.log("Fetched Sylhet Weather: " + sWeather)

    return [dWeather, sWeather]
}

// console.log("Welcome to weather control room")


const helloWorld = async() =>{
    console.log("Hello World!!")
}

const main = async() => {
    console.log("Welcome to weather control room");
let a = weather()
let b = helloWorld()

a.then((value) => {
    console.log(value)
})

}

main()