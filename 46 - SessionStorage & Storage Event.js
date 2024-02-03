// sessionStorage.clear();
// sessionStorage.setItem("name","Hamza")
// sessionStorage.getItem("name");

//for effect open two tab consequentially & change the local or session storage and see the effect on the other tab

window.onstorage=(e)=> {
  alert("Changed")  
    console.log(e)
}