//selectors
const todoInput = document.getElementById("todo-input");
const submitBtn = document.getElementById("todo-btn");
const today = document.getElementById("date");
const todoLists = document.querySelector(".todo-lists");

//event handler
submitBtn.addEventListener("click", addTodo);
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
  todoInput.value;
  //create todo div
  const todoDiv = document.createElement("div");
  todoDiv.classList.add("todo-container");
  //create a li element
  const newTodo = document.createElement("li");
  newTodo.innerText = todoInput.value;
  newTodo.classList.add("todo-item");

  //attach the list to the div
  todoDiv.appendChild(newTodo);
  todoLists.appendChild(todoDiv);
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
}
