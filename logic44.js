// XML API

// event: onload(), onerror()
// property: response, responseText, responseType, responseURL, status, statusText
// function: open(), send(), setRequestHeader()

console.clear();




const makeRequest = (method,url,data) =>{
    const xhr = new XMLHttpRequest();
    xhr.open(method,url);

    xhr.setRequestHeader('Content-Type','application/json');

    xhr.onload = ()=> {
        let data = xhr.response;
        console.log(JSON.parse(data))
    }

    xhr.onerror = () =>{
        console.log('Error Ocurred');
    }
    xhr.send(JSON.stringify(data));
}


const getData = () =>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts');
}

const sendData = () =>{
    makeRequest('GET','https://jsonplaceholder.typicode.com/posts', {
    title: 'foo',
    body: 'bar',
    userId: 1,
});
    
}  

const updateData = () =>{
    makeRequest('PUT','https://jsonplaceholder.typicode.com/posts', {
        id: 1,
        title: 'foo',
        body: 'bar',
        userId: 1,
});
    
}

const updateSingleData = () =>{
    makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts', {
        
        title: 'This is changed',
});
    
}

const deleteData = () =>{
    makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts', {
        
        title: 'This is Deleted',
});
    
}

updateSingleData();
deleteData();