// Problem-1

const a = async (text) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve (text)
        }, 1000)
    })
}

{
    async() => {
        let text = await a("Hello");
        console.log(text);
        text = await a("World");
        console.log(text);

        }
}
 
// Problem-2
function sum(a,b,c) {
    return a+b+c;
}

let x = [1,2,3]
console.log(sum(...x))