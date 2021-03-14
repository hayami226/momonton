const wheather = document.querySelector(".js-wheather");

const API_KEY = "9cfe3eecca6c6429548f359e99ae906f";
const COORD = "coord";

function saveCoords(coordsObj){
    localStorage.setItem(COORD, JSON.stringify(coordsObj));
}

function setWheather(latitude, longitude){
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
    ).then(function(res){
        return res.json();
    }).then(function(json){
        const temperature = json.main.temp;
        wheather.innerText = `${temperature}º @ ${json.name}`;
    });
}

function handlegeoSuccess(position){
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const coordsObj = {
        latitude,
        longitude
    }
    saveCoords(coordsObj);
    setWheather(latitude, longitude);
}

function handlegeoFalid(){
    console.log("cant access geo location")
}

function getCoord(){
    navigator.geolocation.getCurrentPosition(handlegeoSuccess, handlegeoFalid);
}

function setCoord(){
    const localCoord = localStorage.getItem(COORD);
    if(localCoord === null){
        getCoord();
    }else{
        const parseCoord = JSON.parse(localCoord);
        setWheather(parseCoord.latitude, parseCoord.longitude);
    }
}

function init(){
    setCoord();
}

init();