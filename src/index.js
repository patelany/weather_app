fetch('http://api.openweathermap.org/geo/1.0/direct?q=Northville&limit=5&appid=0d83ebaa5424eb334c0fb0ac82e4b01f', {mode: 'cors'})
    .then(function(response) {
        return response.json;
    })
    .then(function(response) {
        console.log(response);
    })