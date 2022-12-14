const { get } = require('callback-fetch');
const apiKey = require('./apiKey');

class WeatherClient {
  fetchWeatherData = (city, callbackFunction) => {
    url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

    get(url, (weatherData) => {
      const data = JSON.parse(weatherData);
      console.log(data);
    });
  }
}