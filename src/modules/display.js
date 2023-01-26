const display = (() => {
    function setSearchResult(weatherData) {
        if (!weatherData) return;

        const searchResult = document.getElementById("searchResult");
        searchResult.classList.add("active");

        const city = document.getElementById("city");
        const temperature = document.getElementById("temperature");
        const title = document.getElementById("title");
        const feelsLike = document.getElementById("feelsLike");
        const humidity = document.getElementById("humidity");
        const windSpeed = document.getElementById("windSpeed");

        city.textContent = `${weatherData.city}`;
        temperature.textContent = `${weatherData.temperature}°`;
        title.textContent = `${weatherData.title}`;
        feelsLike.textContent = `Feels Like:  ${weatherData.feelsLike}°`;
        humidity.textContent = `Humidity:  ${weatherData.humidity} %`;
        windSpeed.textContent = `Wind Speed:  ${weatherData.windSpeed} km/h`;
    }

    return {setSearchResult};

}) ();

export default display;