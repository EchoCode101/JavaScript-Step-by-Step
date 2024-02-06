// function name1() {
//     let name = "Hamza"
//     function displayName() {
//         console.log(name)
//     }
//     name = "Harry"
//     return displayName

// }

// let c = name1();
// c();


//In Closure it reutens the function and the lexical values of its environment

function retnFunc() {
    

    const x = () => {
        let a = 1
        console.log(a)
        const y = () => {
            // let a = 2
            console.log(a)
            const z = () => {
                // let a = 3
                console.log(a)
            }
            z()
        }
        a=987
        y()
    }
    return x
}
let a = retnFunc()
a()
