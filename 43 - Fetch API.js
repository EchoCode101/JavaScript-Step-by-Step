const createTodo = async (todo) => {
  let options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(todo),
  };
  let p = await fetch("https://jsonplaceholder.typicode.com/posts", options);
  // let p = fetch("https://goweather.herokuapp.com/weather/ny", options);
  let ressponse = await p.json();
  //   p.then((ressponse) => {
  //   console.log(ressponse.status);
  //   console.log(ressponse.ok);
  //   console.log(ressponse.headers);
  return ressponse;
  //   }).then((value2) => {
  //     console.log(value2);
  //   });
};
const getTodo = async (id) => {
  let ressponse = await fetch("https://jsonplaceholder.typicode.com/posts" + id);
    let r =  await response.json()
        return r
};
const mainFunc = async () => {
  let todo = {
    title: "foo1",
    body: "bar2",
    userId: 1,
  };
  let todor = await createTodo(todo);
    console.log(todor);
    console.log(await getTodo(5));
};
mainFunc();
