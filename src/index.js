import weather from './modules/weather-data';
/*import weatherFahrenheit from './modules/weather-data'; */
import display from './modules/display';


const searchBar = document.getElementById("searchBar");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const convertBtn = document.getElementById('convertBtn');
let currentUnit = 0; // celsius = 0 fahrenheit = 1 
let temp = 0;
let feelsLike = 0; 



window.onload = function(){
    searchBar.addEventListener("submit", (e) => {
        e.preventDefault();
})};


searchBtn.addEventListener("click", async() => {
    if(searchInput.value === "") return;
    const weatherData = await weather.getData(searchInput.value);
    temp = weatherData.temperature;
    feelsLike = weatherData.feelsLike;
    display.setSearchResult(weatherData);
    document.getElementById("searchInput").value = '';
    document.getElementById("convertBtn").style.display = 'inline-block';
    document.getElementById("searchResult").style.display = 'inline-block';
    currentUnit = 0;
    change();
    
});


convertBtn.addEventListener('click', async() => {
    convertTemps();
  //Switch button text
    convertBtn.innerText = convertBtn.innerText === '°C' ? '°F' : '°C';
    console.log(currentUnit);
});



function convertTemps() {
    currentUnit = currentUnit === 0 ? 1 : 0;
    if (currentUnit === 0 ) {
        temp = Math.round((5/9) * (temp - 32)); 
        feelsLike = Math.round((5/9) * (feelsLike - 32)); 
        temperature.innerHTML = `${temp}°`;
        document.getElementById("feelsLike").innerHTML = `Feels Like: ${feelsLike}°`;
         
    } else if (currentUnit === 1 ) {
        temp = Math.round(temp * 1.8 + 32); 
        feelsLike = Math.round(1.8 * feelsLike + 32); 
        temperature.innerHTML = `${temp}°`;
        document.getElementById("feelsLike").innerHTML = `Feels Like: ${feelsLike}°`;
        
    }
    
}

function change() // no ';' here
{

    if (convertBtn.innerText == '°F') convertBtn.innerText = '°C';
    else convertBtn.innerText = '°C';
}

