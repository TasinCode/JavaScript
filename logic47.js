// Ajax jquery in JS
// add jquery library cdn
// ajax - asynchronous javascript and xml


console.clear();

const makeRequest = async (url,method) =>{
   try{
    const result = await $.ajax({
        url: url,
        method: method,
    });
    return result;
   } catch (err){
    console.log
   }
};


const deleteData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "DELETE").then((res) => console.log(res))
};

deleteData();


const createData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts/1", "PUT",{
        id: 1,
        title: "foomaaaaa",
        body: "barma",
        userId: 1,
    }).then((res) => console.log(res))
};

createData();



const getData = () =>{
    makeRequest("https://jsonplaceholder.typicode.com/posts").then((res) => console.log(res))
};

getData();