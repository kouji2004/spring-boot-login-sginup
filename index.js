const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit",function(event){
  event.preventDefault();
  console.log(input.value);
  add();
});

function add(){
  let todoText = input.value
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
  lists.array.forEach(list => {
    todos.push(list.innerText)
  });
}