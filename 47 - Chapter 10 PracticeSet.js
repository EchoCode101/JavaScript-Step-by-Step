let url = "https://kontests.net/api/v1/all";

let response = fetch(url);
response
  .then((v) => {
    return v.json();
  })
  .then((contests) => {
    console.log(contests);
    ihtml = "";
    for (item in contests) {
      console.log(contests[item]);
      ihtml += `
        <div class="card mx-2 my-2" style="width: 20erm;">
            <img src="" class  ="card-img-top" alt="" />
            <div class="card-body">
                <h5 class="card-title">${contests[item].name}</h5>
                <p class="card-text">
                In 24 Hours? ${contests[item].in_24_hours}</p>
                <p class="card-text">Status is ${contests[item].status} and site is ${contests[item].site}</p>
                <p>Starts at: ${contests[item].start_time}</p>
                <p>Ends at: ${contests[item].end_time}</p>
                <a href="${contests[item].url}" class="btn btn-primary my-4">Visit Contest</a>
            </div> 

        </div>
        `;
    }
    cardContainer.innerHTML = ihtml;
  });

/**************Notes Application**************/

// let n = localStorage.getItem("note");
// alert("Your note is " + n);
// let a = prompt("Enter your note");
// if (a != null) {
//     alert("Your note is Null")
// } else {
    
//     localStorage.setItem("note", a);
// }
// let c = confirm("Do you want to remove you note?")
// if (n != null) {
//     localStorage.removeItem("note")
//     alert("Note is Empty!")
// } else { 
//     alert("Note deleted Successfully!")
// }