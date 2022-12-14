class Weather {
  constructor(client) {
    this.client = client;
  }

  fetch(city) {
    this.client.fetchWeatherData(city, (body) => {
      this.body = body;
    });
  }

  getWeatherData() {
    return this.body;
  }
}

module.exports = Weather;