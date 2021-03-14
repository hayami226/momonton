const toDoForm = document.querySelector(".js-toDoForm"),
  todoList = document.querySelector(".js-toDoList"),
  todoInput = toDoForm.querySelector("input");

const LOCAL_TODO = "todoList";

let toDos = [];

function deleteTodo(event){
    const deleteBtn = event.target;
    const parent = deleteBtn.parentElement;
    todoList.removeChild(parent);

    const cleanTodo = toDos.filter(function(event){
        return event.id !== parseInt(parent.id);
    });
    toDos = cleanTodo;
    saveTodos();
}

function saveTodos(){
    localStorage.setItem(LOCAL_TODO, JSON.stringify(toDos));
}

function setTodo(text){
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btn = document.createElement("button");
    const newId = toDos.length === 0 ? 1 : toDos[toDos.length - 1].id + 1;

    span.innerText = text;
    btn.innerText = "❌";
    btn.addEventListener("click", deleteTodo);

    li.id = newId;
    li.appendChild(btn);
    li.appendChild(span);
    todoList.appendChild(li);

    const toDoObject = {
        id : newId,
        text : text
    }
    toDos.push(toDoObject);
    saveTodos();
}

function inputHandler(event){
    event.preventDefault();
    setTodo(todoInput.value);
    todoInput.value = "";
}

function setTodoList(){
    toDoForm.addEventListener("submit", inputHandler);
}

function init(){
    const localTodo = localStorage.getItem(LOCAL_TODO);
    if(localTodo !== null) {
        const toDoJson = JSON.parse(localTodo);
        toDoJson.forEach(function(todo){
            setTodo(todo.text);
        });
    }
    setTodoList();
}

init();