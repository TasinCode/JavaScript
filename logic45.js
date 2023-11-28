// Fetch API

// it has replaced XMLHttpRequest
// fetch()- global method for making HTTP Request
// 2ways to call - then, async await
// + fetch() is easy to use compare to XMLHttpRequest
//+ fetch() returns a promise
// - returned promise can only handle network error
// - does not support all the older browser





console.clear();

fetch("https://jsonplaceholder.typicode.com/posts/2",{
// method: 'POST',
// method: 'PUT',
//  method: 'PATCH',
 method: 'DELETE',


// headers: {
//     'Content-type': 'application/json; charset=UTF-8',
//   },
// body : JSON.stringify({

//     title: 'fooooooo',
//     body: 'bar',
//     userId: 1,
// }),

})
// .then((res) => res.json())

.then((res) => {
    if(!res.ok){
        const message = `Error : ${res.status}`;
        throw new Error(message);
    } 

    return res.json();
})

.then((res) => console.log(res))
.catch((err) => console.log(err));

