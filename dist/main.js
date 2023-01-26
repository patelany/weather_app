/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/display.js":
/*!********************************!*\
  !*** ./src/modules/display.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
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

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (display);

/***/ }),

/***/ "./src/modules/weather-data.js":
/*!*************************************!*\
  !*** ./src/modules/weather-data.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

const weather = (() => {
    const icon = document.querySelectorAll('.icon');
    const snowCloud = document.getElementById('snowCloud'); 
    const sunny = document.getElementById('sunny');
    const doubleCloud = document.getElementById('doubleCloud');
    const rainCloud = document.getElementById('rainCloud');
    const thunderStorm = document.getElementById('thunderStorm');

  

    function dataNames(data) {
        const {
            name: city,
        
            main: {temp: temperature, feels_like: feelsLike, humidity},
            wind: {speed: windSpeed},
            weather: {0: {main: title, description}}
        } = data;
        return {city, temperature, feelsLike, humidity, windSpeed, title, description};
    } 


    async function getData(city) {
        try {
            const response = await fetch(
                `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=ed92aaa2ed1bdb972e3db1b6fe240859`,
                {
                mode: 'cors',
                }
            );
            if (!response.ok) throw new Error(`City ${city} not found`);
            const data = dataNames(await response.json()); 
            data.temperature = Math.round(data.temperature);
            data.feelsLike = Math.round(data.feelsLike);
            displayWeather(data); 
            console.log(data);
            return data;

        } catch (error) {
                alert(error);
                return null;
        } 
    } 
    return {getData};

     function displayWeather(data) {
        // Set background depending on weather 
        switch (data.title) {
          case 'Clear':
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/281260/pexels-photo-281260.jpeg?auto=compress&cs=tinysrgb&w=600)';
            for (let i = 0; i < icon.length; i++) {
                if (icon[i] != icon[2]) {
                    icon[i].style.display = 'none';   
                }
                else {
                    sunny.style.display = 'inline-block'; 
                }
            }
            break;
          case 'Clouds':
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/53594/blue-clouds-day-fluffy-53594.jpeg?auto=compress&cs=tinysrgb&w=600)';
            for (let i = 0; i < icon.length; i++) {
                if (icon[i] != icon[1]) {
                    icon[i].style.display = 'none';   
                }
                else {
                    doubleCloud.style.display = 'inline-block'; 
                }
            }
            break;
          case 'Rain':
          case 'Drizzle':
          case 'Mist':
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/110874/pexels-photo-110874.jpeg?auto=compress&cs=tinysrgb&w=800)';
            for (let i = 0; i < icon.length; i++) {
                if (icon[i] != icon[0]) {
                    icon[i].style.display = 'none';   
                }
                else {
                    rainCloud.style.display = 'inline-block'; 
                }
            }
            break;
          case 'Thunderstorm':
            document.body.style.backgroundImage = 'url(https://images.unsplash.com/photo-1509401934319-cb35b87bf39e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTIyfHx0aHVuZGVyc3Rvcm18ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60)';
            for (let i = 0; i < icon.length; i++) {
                if (icon[i] != icon[4]) {
                    icon[i].style.display = 'none';   
                }
                else {
                    thunderStorm.style.display = 'inline-block'; 
                }
            }
            break;
          case 'Haze':
          case 'Fog': 
            document.body.style.backgroundImage = 'url(https://images.pexels.com/photos/1659683/pexels-photo-1659683.jpeg?auto=compress&cs=tinysrgb&w=600)';
            for (let i = 0; i < icon.length; i++) {
                if (icon[i] != icon[1]) {
                    icon[i].style.display = 'none';   
                }
                else {
                    doubleCloud.style.display = 'inline-block'; 
                }
            }
            break;
          case 'Snow':
          case 'Flurries':
            document.body.style.backgroundImage = 'url(https://static4.depositphotos.com/1001944/385/i/600/depositphotos_3852391-stock-photo-snow-background.jpg)';
            for (let i = 0; i < icon.length; i++) {
                if (icon[i] != icon[3]) {
                    icon[i].style.display = 'none';   
                }
                else {
                    snowCloud.style.display = 'inline-block'; 
                }
            }
            break;
        }
        return {displayWeather};
        }


  
}) ();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (weather);



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_weather_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/weather-data */ "./src/modules/weather-data.js");
/* harmony import */ var _modules_display__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display */ "./src/modules/display.js");

/*import weatherFahrenheit from './modules/weather-data'; */



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
    const weatherData = await _modules_weather_data__WEBPACK_IMPORTED_MODULE_0__["default"].getData(searchInput.value);
    temp = weatherData.temperature;
    feelsLike = weatherData.feelsLike;
    _modules_display__WEBPACK_IMPORTED_MODULE_1__["default"].setSearchResult(weatherData);
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


})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly93ZWF0aGVyX2FwcC8uL3NyYy9tb2R1bGVzL2Rpc3BsYXkuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvLi9zcmMvbW9kdWxlcy93ZWF0aGVyLWRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXJfYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlcl9hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyX2FwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkaXNwbGF5ID0gKCgpID0+IHtcbiAgICBmdW5jdGlvbiBzZXRTZWFyY2hSZXN1bHQod2VhdGhlckRhdGEpIHtcbiAgICAgICAgaWYgKCF3ZWF0aGVyRGF0YSkgcmV0dXJuO1xuXG4gICAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoUmVzdWx0XCIpO1xuICAgICAgICBzZWFyY2hSZXN1bHQuY2xhc3NMaXN0LmFkZChcImFjdGl2ZVwiKTtcblxuICAgICAgICBjb25zdCBjaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5XCIpO1xuICAgICAgICBjb25zdCB0ZW1wZXJhdHVyZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcGVyYXR1cmVcIik7XG4gICAgICAgIGNvbnN0IHRpdGxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ0aXRsZVwiKTtcbiAgICAgICAgY29uc3QgZmVlbHNMaWtlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIik7XG4gICAgICAgIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcbiAgICAgICAgY29uc3Qgd2luZFNwZWVkID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJ3aW5kU3BlZWRcIik7XG5cbiAgICAgICAgY2l0eS50ZXh0Q29udGVudCA9IGAke3dlYXRoZXJEYXRhLmNpdHl9YDtcbiAgICAgICAgdGVtcGVyYXR1cmUudGV4dENvbnRlbnQgPSBgJHt3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZX3CsGA7XG4gICAgICAgIHRpdGxlLnRleHRDb250ZW50ID0gYCR7d2VhdGhlckRhdGEudGl0bGV9YDtcbiAgICAgICAgZmVlbHNMaWtlLnRleHRDb250ZW50ID0gYEZlZWxzIExpa2U6ICAke3dlYXRoZXJEYXRhLmZlZWxzTGlrZX3CsGA7XG4gICAgICAgIGh1bWlkaXR5LnRleHRDb250ZW50ID0gYEh1bWlkaXR5OiAgJHt3ZWF0aGVyRGF0YS5odW1pZGl0eX0gJWA7XG4gICAgICAgIHdpbmRTcGVlZC50ZXh0Q29udGVudCA9IGBXaW5kIFNwZWVkOiAgJHt3ZWF0aGVyRGF0YS53aW5kU3BlZWR9IGttL2hgO1xuICAgIH1cblxuICAgIHJldHVybiB7c2V0U2VhcmNoUmVzdWx0fTtcblxufSkgKCk7XG5cbmV4cG9ydCBkZWZhdWx0IGRpc3BsYXk7IiwiXG5jb25zdCB3ZWF0aGVyID0gKCgpID0+IHtcbiAgICBjb25zdCBpY29uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmljb24nKTtcbiAgICBjb25zdCBzbm93Q2xvdWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc25vd0Nsb3VkJyk7IFxuICAgIGNvbnN0IHN1bm55ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N1bm55Jyk7XG4gICAgY29uc3QgZG91YmxlQ2xvdWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnZG91YmxlQ2xvdWQnKTtcbiAgICBjb25zdCByYWluQ2xvdWQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmFpbkNsb3VkJyk7XG4gICAgY29uc3QgdGh1bmRlclN0b3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3RodW5kZXJTdG9ybScpO1xuXG4gIFxuXG4gICAgZnVuY3Rpb24gZGF0YU5hbWVzKGRhdGEpIHtcbiAgICAgICAgY29uc3Qge1xuICAgICAgICAgICAgbmFtZTogY2l0eSxcbiAgICAgICAgXG4gICAgICAgICAgICBtYWluOiB7dGVtcDogdGVtcGVyYXR1cmUsIGZlZWxzX2xpa2U6IGZlZWxzTGlrZSwgaHVtaWRpdHl9LFxuICAgICAgICAgICAgd2luZDoge3NwZWVkOiB3aW5kU3BlZWR9LFxuICAgICAgICAgICAgd2VhdGhlcjogezA6IHttYWluOiB0aXRsZSwgZGVzY3JpcHRpb259fVxuICAgICAgICB9ID0gZGF0YTtcbiAgICAgICAgcmV0dXJuIHtjaXR5LCB0ZW1wZXJhdHVyZSwgZmVlbHNMaWtlLCBodW1pZGl0eSwgd2luZFNwZWVkLCB0aXRsZSwgZGVzY3JpcHRpb259O1xuICAgIH0gXG5cblxuICAgIGFzeW5jIGZ1bmN0aW9uIGdldERhdGEoY2l0eSkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChcbiAgICAgICAgICAgICAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMi41L3dlYXRoZXI/cT0ke2NpdHl9JnVuaXRzPW1ldHJpYyZhcHBpZD1lZDkyYWFhMmVkMWJkYjk3MmUzZGIxYjZmZTI0MDg1OWAsXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIG1vZGU6ICdjb3JzJyxcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykgdGhyb3cgbmV3IEVycm9yKGBDaXR5ICR7Y2l0eX0gbm90IGZvdW5kYCk7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gZGF0YU5hbWVzKGF3YWl0IHJlc3BvbnNlLmpzb24oKSk7IFxuICAgICAgICAgICAgZGF0YS50ZW1wZXJhdHVyZSA9IE1hdGgucm91bmQoZGF0YS50ZW1wZXJhdHVyZSk7XG4gICAgICAgICAgICBkYXRhLmZlZWxzTGlrZSA9IE1hdGgucm91bmQoZGF0YS5mZWVsc0xpa2UpO1xuICAgICAgICAgICAgZGlzcGxheVdlYXRoZXIoZGF0YSk7IFxuICAgICAgICAgICAgY29uc29sZS5sb2coZGF0YSk7XG4gICAgICAgICAgICByZXR1cm4gZGF0YTtcblxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGFsZXJ0KGVycm9yKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfSBcbiAgICB9IFxuICAgIHJldHVybiB7Z2V0RGF0YX07XG5cbiAgICAgZnVuY3Rpb24gZGlzcGxheVdlYXRoZXIoZGF0YSkge1xuICAgICAgICAvLyBTZXQgYmFja2dyb3VuZCBkZXBlbmRpbmcgb24gd2VhdGhlciBcbiAgICAgICAgc3dpdGNoIChkYXRhLnRpdGxlKSB7XG4gICAgICAgICAgY2FzZSAnQ2xlYXInOlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSAndXJsKGh0dHBzOi8vaW1hZ2VzLnBleGVscy5jb20vcGhvdG9zLzI4MTI2MC9wZXhlbHMtcGhvdG8tMjgxMjYwLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTYwMCknO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGljb25baV0gIT0gaWNvblsyXSkge1xuICAgICAgICAgICAgICAgICAgICBpY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzdW5ueS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ0Nsb3Vkcyc6XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICd1cmwoaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTM1OTQvYmx1ZS1jbG91ZHMtZGF5LWZsdWZmeS01MzU5NC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz02MDApJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpY29uW2ldICE9IGljb25bMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZG91YmxlQ2xvdWQuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdSYWluJzpcbiAgICAgICAgICBjYXNlICdEcml6emxlJzpcbiAgICAgICAgICBjYXNlICdNaXN0JzpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xMTA4NzQvcGV4ZWxzLXBob3RvLTExMDg3NC5qcGVnP2F1dG89Y29tcHJlc3MmY3M9dGlueXNyZ2Imdz04MDApJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpY29uW2ldICE9IGljb25bMF0pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmFpbkNsb3VkLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJzsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAnVGh1bmRlcnN0b3JtJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUwOTQwMTkzNDMxOS1jYjM1Yjg3YmYzOWU/aXhsaWI9cmItNC4wLjMmaXhpZD1Nbnd4TWpBM2ZEQjhNSHh6WldGeVkyaDhNVEl5Zkh4MGFIVnVaR1Z5YzNSdmNtMThaVzU4TUh4OE1IeDgmYXV0bz1mb3JtYXQmZml0PWNyb3Amdz02MDAmcT02MCknO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGljb25baV0gIT0gaWNvbls0XSkge1xuICAgICAgICAgICAgICAgICAgICBpY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aHVuZGVyU3Rvcm0uc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snOyBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdIYXplJzpcbiAgICAgICAgICBjYXNlICdGb2cnOiBcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChodHRwczovL2ltYWdlcy5wZXhlbHMuY29tL3Bob3Rvcy8xNjU5NjgzL3BleGVscy1waG90by0xNjU5NjgzLmpwZWc/YXV0bz1jb21wcmVzcyZjcz10aW55c3JnYiZ3PTYwMCknO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpY29uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGljb25baV0gIT0gaWNvblsxXSkge1xuICAgICAgICAgICAgICAgICAgICBpY29uW2ldLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7ICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBkb3VibGVDbG91ZC5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZS1ibG9jayc7IFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgJ1Nub3cnOlxuICAgICAgICAgIGNhc2UgJ0ZsdXJyaWVzJzpcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChodHRwczovL3N0YXRpYzQuZGVwb3NpdHBob3Rvcy5jb20vMTAwMTk0NC8zODUvaS82MDAvZGVwb3NpdHBob3Rvc18zODUyMzkxLXN0b2NrLXBob3RvLXNub3ctYmFja2dyb3VuZC5qcGcpJztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaWNvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChpY29uW2ldICE9IGljb25bM10pIHtcbiAgICAgICAgICAgICAgICAgICAgaWNvbltpXS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnOyAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgc25vd0Nsb3VkLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJzsgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtkaXNwbGF5V2VhdGhlcn07XG4gICAgICAgIH1cblxuXG4gIFxufSkgKCk7XG5cbmV4cG9ydCBkZWZhdWx0IHdlYXRoZXI7XG5cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHdlYXRoZXIgZnJvbSAnLi9tb2R1bGVzL3dlYXRoZXItZGF0YSc7XG4vKmltcG9ydCB3ZWF0aGVyRmFocmVuaGVpdCBmcm9tICcuL21vZHVsZXMvd2VhdGhlci1kYXRhJzsgKi9cbmltcG9ydCBkaXNwbGF5IGZyb20gJy4vbW9kdWxlcy9kaXNwbGF5JztcblxuXG5jb25zdCBzZWFyY2hCYXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInNlYXJjaEJhclwiKTtcbmNvbnN0IHNlYXJjaElucHV0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZWFyY2hJbnB1dFwiKTtcbmNvbnN0IHNlYXJjaEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoQnRuXCIpO1xuY29uc3QgY29udmVydEJ0biA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb252ZXJ0QnRuJyk7XG5sZXQgY3VycmVudFVuaXQgPSAwOyAvLyBjZWxzaXVzID0gMCBmYWhyZW5oZWl0ID0gMSBcbmxldCB0ZW1wID0gMDtcbmxldCBmZWVsc0xpa2UgPSAwOyBcblxuXG5cbndpbmRvdy5vbmxvYWQgPSBmdW5jdGlvbigpe1xuICAgIHNlYXJjaEJhci5hZGRFdmVudExpc3RlbmVyKFwic3VibWl0XCIsIChlKSA9PiB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbn0pfTtcblxuXG5zZWFyY2hCdG4uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGFzeW5jKCkgPT4ge1xuICAgIGlmKHNlYXJjaElucHV0LnZhbHVlID09PSBcIlwiKSByZXR1cm47XG4gICAgY29uc3Qgd2VhdGhlckRhdGEgPSBhd2FpdCB3ZWF0aGVyLmdldERhdGEoc2VhcmNoSW5wdXQudmFsdWUpO1xuICAgIHRlbXAgPSB3ZWF0aGVyRGF0YS50ZW1wZXJhdHVyZTtcbiAgICBmZWVsc0xpa2UgPSB3ZWF0aGVyRGF0YS5mZWVsc0xpa2U7XG4gICAgZGlzcGxheS5zZXRTZWFyY2hSZXN1bHQod2VhdGhlckRhdGEpO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoSW5wdXRcIikudmFsdWUgPSAnJztcbiAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnZlcnRCdG5cIikuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUtYmxvY2snO1xuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VhcmNoUmVzdWx0XCIpLnN0eWxlLmRpc3BsYXkgPSAnaW5saW5lLWJsb2NrJztcbiAgICBjdXJyZW50VW5pdCA9IDA7XG4gICAgY2hhbmdlKCk7XG4gICAgXG59KTtcblxuXG5jb252ZXJ0QnRuLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYXN5bmMoKSA9PiB7XG4gICAgY29udmVydFRlbXBzKCk7XG4gIC8vU3dpdGNoIGJ1dHRvbiB0ZXh0XG4gICAgY29udmVydEJ0bi5pbm5lclRleHQgPSBjb252ZXJ0QnRuLmlubmVyVGV4dCA9PT0gJ8KwQycgPyAnwrBGJyA6ICfCsEMnO1xuICAgIGNvbnNvbGUubG9nKGN1cnJlbnRVbml0KTtcbn0pO1xuXG5cblxuZnVuY3Rpb24gY29udmVydFRlbXBzKCkge1xuICAgIGN1cnJlbnRVbml0ID0gY3VycmVudFVuaXQgPT09IDAgPyAxIDogMDtcbiAgICBpZiAoY3VycmVudFVuaXQgPT09IDAgKSB7XG4gICAgICAgIHRlbXAgPSBNYXRoLnJvdW5kKCg1LzkpICogKHRlbXAgLSAzMikpOyBcbiAgICAgICAgZmVlbHNMaWtlID0gTWF0aC5yb3VuZCgoNS85KSAqIChmZWVsc0xpa2UgLSAzMikpOyBcbiAgICAgICAgdGVtcGVyYXR1cmUuaW5uZXJIVE1MID0gYCR7dGVtcH3CsGA7XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZmVlbHNMaWtlXCIpLmlubmVySFRNTCA9IGBGZWVscyBMaWtlOiAke2ZlZWxzTGlrZX3CsGA7XG4gICAgICAgICBcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRVbml0ID09PSAxICkge1xuICAgICAgICB0ZW1wID0gTWF0aC5yb3VuZCh0ZW1wICogMS44ICsgMzIpOyBcbiAgICAgICAgZmVlbHNMaWtlID0gTWF0aC5yb3VuZCgxLjggKiBmZWVsc0xpa2UgKyAzMik7IFxuICAgICAgICB0ZW1wZXJhdHVyZS5pbm5lckhUTUwgPSBgJHt0ZW1wfcKwYDtcbiAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVsc0xpa2VcIikuaW5uZXJIVE1MID0gYEZlZWxzIExpa2U6ICR7ZmVlbHNMaWtlfcKwYDtcbiAgICAgICAgXG4gICAgfVxuICAgIFxufVxuXG5mdW5jdGlvbiBjaGFuZ2UoKSAvLyBubyAnOycgaGVyZVxue1xuXG4gICAgaWYgKGNvbnZlcnRCdG4uaW5uZXJUZXh0ID09ICfCsEYnKSBjb252ZXJ0QnRuLmlubmVyVGV4dCA9ICfCsEMnO1xuICAgIGVsc2UgY29udmVydEJ0bi5pbm5lclRleHQgPSAnwrBDJztcbn1cblxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9