let a = { name: 'Hamza', Language: 'English' , run: () => {
        alert("self run")
    }}
console.log(a)


let p = {
    run: () => {
        alert("run")
    }
}
p.__proto__ = {name1: 'Hamza 2'}
a.__proto__ = p
a.run()
console.log(a.name1)