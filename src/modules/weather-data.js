
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

export default weather;

