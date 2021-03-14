const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greeting = document.querySelector(".js-greeting");

const NONE_FORM = "form",
  NONE_GREETING = "greeting",
  SHOWGING = "showing",
  USER_NAME = "userName";

function paintGreeting(text){
    form.classList.remove(SHOWGING);
    form.classList.add(NONE_FORM);
    greeting.classList.remove(NONE_GREETING);
    greeting.classList.add(SHOWGING);
    greeting.innerText = `Hello ${text}!`;
}

function saveName(name){
    localStorage.setItem(USER_NAME, name);
}

function handleSubmit(event){
    event.preventDefault();
    const name = input.value;
    paintGreeting(name);
    saveName(name);
}

function paintInput(){
    form.classList.remove(NONE_FORM);
    form.classList.add(SHOWGING);
    form.addEventListener("submit", handleSubmit);
}

function loadName() {
    const userName = localStorage.getItem(USER_NAME);
    if(userName === null) {
        paintInput();
    } else {
        paintGreeting(userName);
    }
}

function init() {
    loadName();
}

init();