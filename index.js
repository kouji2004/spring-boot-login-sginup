const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

const todos = JSON.parse(localStorage.getItem("todos"));

if(todos){
  todos.forEach(todo =>{
    add(todo);
  })
}

form.addEventListener("submit",function(event){
  event.preventDefault();
  console.log(input.value);
  add();
});

function add(todo){
  let todoText = input.value
if(todo){
  todoText = todo;
}

  if(todoText){
  const li = document.createElement("li");
  li.innerText = todoText;
  li.classList.add("list-group-item");
  ul.appendChild(li);
  input.value = "";
  seveData();
  }
}

function seveData(){
  const lists = document.querySelector("li");
  let todos =[];
  lists.forEach(list => {
    todos.push(list.innerText)
  });
  localStorage.setItem("todos", JSON.stringify(todos));
}