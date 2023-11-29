// Axios API 
// axios is a jd library
// it helps to make request from browser(plain js/vue/React/Angular), node.js

// +very easy to use
// + it supports all modern browser including
// + it returns promise
// + throws error brilliantly
// + No need to set header cause axios is intelligent

// Axios Methods

// axios(config)
// axios(url, [config])

// axios.get(url, [config])
// axios.post(url, [config])
// axios.put(url, [config])
// axios.patch(url, [config])
// axios.delete(url, [config])

// axios returns response object - data, status, statusText, headers, config



console.clear();

axios
.get("https://jsonplaceholder.typicode.com/posts")
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

axios
.post("https://jsonplaceholder.typicode.com/posts", {
    method: 'POST',
    body: JSON.stringify({
    title: 'foo',
    body: 'bar',
    userId: 1,
    }),
    
})
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

axios
.put("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PUT',
    body: JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
      id: 1,
    }),
   
})
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

axios
.patch("https://jsonplaceholder.typicode.com/posts/1", {
    method: 'PATCH',
    body: JSON.stringify({
      title: 'foo',
      body: 'bardsddscsc',
      userId: 1,
      id: 1,
    }),
   
})
.then((res) => console.log(res.data))
.catch((err) => console.log(err));

axios
.delete("https://jsonplaceholder.typicode.com/posts/1")
.then((res) => console.log(res.data))
.catch((err) => console.log(err));
  

const makeRequest = async (config) => {
    return await(config);
}



const deleteData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "delete",
})
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

deleteData();




const updateData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts/1",
        method: "put",
        data: JSON.stringify({
            id: 1,
            title: 'foosadad',
            body: 'barasdas',
            userId: 1,
    }),
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

updateData();


const createData = () => {
    makeRequest({
        url: "https://jsonplaceholder.typicode.com/posts",
        method: "post",
        data: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
    }),
})
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};

createData();



// const getData = () => {
//     makeRequest("https://jsonplaceholder.typicode.com/posts")
//     .then((res) => console.log(res))
//     .catch((err) => console.log(err));
// };

// getData();