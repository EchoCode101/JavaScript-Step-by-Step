//This is the example of the imidiatly invoked function


let someFunction = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(50);
        }, 2000);
    })
}

(async () => {
    
    let b = await someFunction()
    console.log(b)
    let c= await someFunction()
    console.log(c)
    let d= await someFunction()
    console.log(d)
})()