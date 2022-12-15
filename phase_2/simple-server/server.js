const express = require('express');
const app = express();
const port = 3000;
let x = 0;

app.get('/', (req, res) => {
  res.send('Hello, express')
});

app.post('/counter', (req,res) => {
  x += 1;
  res.send('')
});

app.get('/counter', (req,res) => {
  res.send(`${x}`);
});

app.delete('/counter', (req,res) => {
  x = 0;
  res.send('');
});

console.log(`Server listening on localhost:${port}`);
app.listen(port);