class Thermostat {
  constructor() {
    this.temp = {temperature: 20};
    this.PSM = true;
  }
  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.PSM && this.temp.temperature < 25) {
      this.temp.temperature += 1;
    } else if (!this.PSM && this.temp.temperature < 32) {
      this.temp.temperature += 1;
    }
  }

  down() {
    if (this.temp.temperature > 10) {
      this.temp.temperature -= 1;
    }
  }

  setPowerSavingMode(value) {
    this.PSM = value;
  }

  reset() {
    this.temp.temperature = 20;
  }

  energyUsage() {
    if (this.temp.temperature < 18) {
      return 'low-usage';
    } else if (this.temp.temperature <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}

module.exports = Thermostat;