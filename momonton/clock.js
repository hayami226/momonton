const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
    const date = new Date();
    const hour = date.getHours();
    const minuate = date.getMinutes();
    const second = date.getSeconds();

    clockTitle.innerText = `${hour < 10 ? `0${hour}` : hour}:${minuate < 10 ? `0${minuate}` : minuate}:${second < 10 ? `0${second}` : second}`;
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}

init();