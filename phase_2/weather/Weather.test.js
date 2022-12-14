const Weather = require('./weather');

describe('Weather', () => {
  it('gets the correct weather using WeatherClient', () => {
    const mockedClient = {
      fetchWeatherData: (cityName, callback) => {
        callback({
          main: 'mist',
          temp: '-0.25'
        });
      }
    }

    const weather = new Weather(mockedClient);
    weather.fetch('London');
    expect(weather.getWeatherData()).toEqual({
      main: 'mist',
      temp: '-0.25'
    });
  });
});