class Thermostat {
  constructor() {
    this.temp = 20;
    this.PSM = true;
  }
  getTemperature() {
    return this.temp;
  }

  up() {
    if (this.PSM && this.temp < 25) {
      this.temp += 1;
    } else if (!this.PSM && this.temp < 32) {
      this.temp += 1;
    }
  }

  down() {
    if (this.temp > 10) {
      this.temp -= 1;
    }
  }

  setPowerSavingMode(value) {
    this.PSM = value;
  }

  reset() {
    this.temp = 20;
  }

  energyUsage() {
    if (this.temp < 18) {
      return 'low-usage';
    } else if (this.temp <= 25) {
      return 'medium-usage';
    } else {
      return 'high-usage';
    }
  }
}

module.exports = Thermostat;