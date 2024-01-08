// Problem-1

let url = "https://api.sunrisesunset.io/json?lat=38.907192&lng=-77.036873&timezone=UTC&date=today"
let response = fetch(url)
response.then((v) => {
    return v.json()
}) .then((v) => {
    console.log(v)
    ihtml= ""
    for (item in v) {
        console.log(v[item])
        ihtml += `
        <div class="card" style="width: 18rem;">
        <img src="https://cdn.hswstatic.com/gif/dictionary.jpg" class="card-img-top" alt="">
        <div class="card-body">
          <h5 class="card-title">${v[item].status}</h5>
          <p>  sunrise: ${v[item].sunrise} </p>
          <p>  sunset: ${v[item].sunset} </p>
          <p>  first_light: ${v[item].first_light} </p>
          <p>  solar_noon: ${v[item].solar_noon} </p>
          <p>  last_light: ${v[item].last_light} </p>
          <p>  sunset: ${v[item].sunset} </p>
          <a href="${v[item].reading_unit}" class="btn btn-primary">Visit Here</a>
        </div>
      </div>
    `
        
    }

    crimeCard.innerHTML = ihtml;
})
// Problem-3

let n = localStorage.getItem("note")
alert("Your note is: " + n)


// Problem-2

let a = prompt("Make a note to save at local storage: ")
if (a){
    localStorage.setItem("note", a)
}


// Problem-4

let c = confirm("Do you want to delete your note?")
if (c){
    localStorage.removeItem("note");
    alert("Note deleted Successfully!")
}