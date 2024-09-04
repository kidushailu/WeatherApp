
const apiKey = "c0fee140b260bc55ce2eafa0342abf65";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");



async function checkWeather(city) {
    const response = await fetch(apiUrl + `&q=${city}` + `&appid=${apiKey}`);

    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {

        var data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector(".humidity").innerHTML = data.main.humidity + `%`;
        document.querySelector(".wind").innerHTML = data.wind.speed + ` km/h`;

        const weatherCon = data.weather[0].main;
        if (weatherCon == "Clouds") {
            weatherIcon.src = "images/clouds.png";
        } 
        else if (weatherCon == "Clear") {
            weatherIcon.src = "images/clear.png";
        }
        else if (weatherCon == "Rain") {
            weatherIcon.src = "images/rain.png";
        }
        else if (weatherCon == "Drizzle") {
            weatherIcon.src = "images/drizzle.png";
        }
        else if (weatherCon == "Mist") {
            weatherIcon.src = "images/mist.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click", () => {
    checkWeather(searchBox.value);
})