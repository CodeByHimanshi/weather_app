const apiKey = "b58b09e4dc2268e63c7ca06d5fbb487b";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";


const searchcity = document.querySelector(".search-row input");
const searchBtn = document.querySelector(".search-row button");
const weatherIcon = document.querySelector(".weather-icons")

async function weatherReport(city) {
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp-num").innerHTML = Math.round(data.main.temp);
    document.querySelector(".wind-num").innerHTML = data.wind.speed;
    document.querySelector(".humidity-count").innerHTML = data.main.humidity;
    document.querySelector(".feels-like").innerHTML = Math.round(data.main.feels_like);
    document.querySelector(".min-temp").innerHTML = Math.round(data.main.temp_max);
    document.querySelector(".max-temp").innerHTML = Math.round(data.main.temp_min);

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "images/cloudy.png";
    }
    else if(data.weather[0].main == "Thunderstorm"){
        weatherIcon.src = "images/thunder.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "images/thunder-rain.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "images/rainy.png";
    }
    else if(data.weather[0].main == "Snow"){
        weatherIcon.src = "images/snowfall.png";
    }
    else if(data.weather[0].main == "Atmosphere"){
        weatherIcon.src = "images/clouds.png";
    }
    else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "images/sunny.png";
    }
}

searchBtn.addEventListener("click", ()=>{
    weatherReport(searchcity.value);
});

