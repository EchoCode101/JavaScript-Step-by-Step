//Todo list
submit.addEventListener("click", (e) => {
  e.preventDefault();
  let titleC = title.value;
  let descC = desc.value;

  localStorage.setItem("todo", JSON.stringify([titleC, descC]));
  console.log(e);
  todo.innerHTML = `
    <h1>${titleC}</h1>
        <p>${descC}</p>
    `;
  title.value = "";

  desc.value = "";
});

deletebtn.addEventListener("click", (e) => {
  e.preventDefault();
  localStorage.removeItem("todo");
  todo.innerHTML = `
    `;
});

//<div class="form-container"></div>
