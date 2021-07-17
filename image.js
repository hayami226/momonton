const body = document.querySelector("body");

function loadImage(number){
    const image = new Image();
    image.src = `images/${number + 1}.jpg`;
    image.classList.add("image");
    body.prepend(image);
}

function getRandeomNumber(){
    return Math.floor(Math.random() * 5);
}

function init(){
    const imageNumber = getRandeomNumber();
    loadImage(imageNumber);
}

init();