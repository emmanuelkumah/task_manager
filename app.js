//selectors
const todoInput = document.getElementById("todo-input");
const submitBtn = document.getElementById("todo-btn");
const today = document.getElementById("date");
const todoList = document.querySelector(".todo-list");

//event handler
submitBtn.addEventListener("click", addTodo);
todoList.addEventListener("click", deleteTodo);

//functions
const date = new Date();
//get month=
const month = date.getUTCMonth() + 1;
const day = date.getUTCDate();
const year = date.getUTCFullYear();
today.textContent = day + "/" + month + "/" + year;

//addtodo
function addTodo(e) {
  e.preventDefault();
  //create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo");
  //create a list
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  //attach the list to the div
  todoDiv.appendChild(newTodo);
  //clear the input field;
  todoInput.value = "";

  //create the actions buttons
  const completeBtn = document.createElement("button");
  completeBtn.classList.add("complete-btn");
  completeBtn.innerHTML = `<i class="far fa-check-circle"></i>`;
  todoDiv.appendChild(completeBtn);

  const editBtn = document.createElement("button");
  editBtn.innerHTML = `<i class="fas fa-pencil-alt"></i>`;
  editBtn.classList.add("edit-btn");
  todoDiv.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = `<i class="fas fa-trash"></i>`;
  deleteBtn.classList.add("delete-btn");
  todoDiv.appendChild(deleteBtn);

  //append div to lists
  todoList.appendChild(todoDiv);
}

//delete a  task
function deleteTodo(e) {
  const item = e.target;
  if (item.classList.contains("delete-btn")) {
    item.parentElement.remove();
  }
}
