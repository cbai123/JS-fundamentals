const express = require('express');
const app = express();
const port = 3000;
const Thermostat = require('./thermostat');

const thermostat = new Thermostat;
// let thermo = {
//   temperature: thermostat.getTemperature()
// }

app.get('/temperature', (req,res) => {
  res.send(JSON.stringify(thermostat.getTemperature()));
  // res.send(JSON.stringify(thermo));
});

app.post('/up', (req,res) => {
  thermostat.up();
  res.send('');
});

app.post('/down', (req, res) => {
  thermostat.down();
  res.send('');
});

app.delete('/temperature', (req, res) => {
  thermostat.reset();
  res.send('');
});


console.log(`Server listening on localhost:${port}`);
app.listen(port);