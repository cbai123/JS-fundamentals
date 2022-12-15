const Thermostat = require('./thermostat');

describe('Thermostat class', () => {
  it('starts with temp of 20', () => {
    const thermostat = new Thermostat();
    expect(thermostat.getTemperature()).toEqual({"temperature":20});
  });

  it('can increase the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual({"temperature":22});
  });

  it('can decrease the temperature', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual({"temperature":19});
  });

  it('cannot decrease past 10', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 15 ; i++) {
      thermostat.down();
    }
    expect(thermostat.getTemperature()).toEqual({"temperature":10});
  });

  it('cannot increase past 25 by default', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 10 ; i ++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual({"temperature":25});
  });

  it('cannot increase past 32 when PSM is off', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 15 ; i ++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual({"temperature":32});
  });

  it('can turn PSM back on', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    thermostat.setPowerSavingMode(true)
    for (let i = 0 ; i < 15 ; i ++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual({"temperature":25});
  });

  it('can reset to 20', () => {
    const thermostat = new Thermostat();
    for (let i = 0 ; i < 5 ; i ++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual({"temperature":25});
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual({"temperature":20});
  });

  it('will share the correct energy usage when low', () => {
    const thermostat = new Thermostat();
    thermostat.down();
    thermostat.down();
    thermostat.down();
    expect(thermostat.energyUsage()).toEqual('low-usage');
  });

  it('will share the correct energy usage when medium', () => {
    const thermostat = new Thermostat();
    expect(thermostat.energyUsage()).toEqual('medium-usage');
  });

  it('will share the correct enrgy usage when high', () => {
    const thermostat = new Thermostat();
    thermostat.setPowerSavingMode(false);
    for (let i = 0 ; i < 10 ; i ++) {
      thermostat.up();
    }
    expect(thermostat.energyUsage()).toEqual('high-usage');
  });

  it('will display the correct temp after adding and subtracting', () => {
    const thermostat = new Thermostat();
    thermostat.up();
    thermostat.down();
    thermostat.up();
    thermostat.up();
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual({"temperature":21});
  });
})