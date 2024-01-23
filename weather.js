
const APIkey = 'e812a67822e0f3a0e4b8d2f3fc345417';
const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

const searchbox = document.querySelector('.searchbox input')
const searchbtn = document.querySelector('.searchbox button')
const weatherIcon = document.querySelector('.weathericon')

async function checkWeather(CityName) {
    const response = await fetch(apiurl + CityName + `&appid=${APIkey}`);
    if (response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weatherinfo").style.display = "none";
    } else {
        var data = await response.json();
        // Get the city name from the data
        document.querySelector('.City-Name').innerHTML = data.name;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector('.humidity').innerHTML = data.main.humidity + '%';
        document.querySelector('.windspeed').innerHTML = data.wind.speed + 'Km/h';

        if (data.weather[0].main == "Clouds") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/512/1146/1146869.png?ga=GA1.1.677666759.1705996385&"
        }
        else if (data.weather[0].main == "Rain") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/512/6631/6631273.png?ga=GA1.1.677666759.1705996385&"
        }
        else if (data.weather[0].main == "Snow") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/512/3947/3947099.png?ga=GA1.1.677666759.1705996385&"
        }
        else if (data.weather[0].main == "Drizzle") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/512/1163/1163657.png?ga=GA1.1.677666759.1705996385&"
        }
        else if (data.weather[0].main == "Mist") {
            weatherIcon.src = "https://cdn-icons-png.freepik.com/512/4181/4181522.png?ga=GA1.1.677666759.1705996385&"

        }
        else if (data.weather[0].main == "Clear") {

            weatherIcon.src = "https://cdn-icons-png.freepik.com/512/733/733740.png?ga=GA1.1.677666759.1705996385&"
        }
        document.querySelector(".weatherinfo").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }



};
searchbtn.addEventListener("click", () => {

    checkWeather(searchbox.value);

});
