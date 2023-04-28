const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

let numberOfBottles = 99;

app.get('/', (req, res) => {
  res.send(`${numberOfBottles} Bottles of beer on the wall <br><a href='/take-one-down'>take one down, pass it around</a>`);
});

app.get('/take-one-down', (req, res) => {
  if (numberOfBottles === 0) {
    res.send("No more bottles of beer on the wall <br><a href='/'>Start over</a>");
  } else {
    res.send(`${numberOfBottles} Bottles of beer on the wall <br><a href='/take-one-down/${numberOfBottles - 1}'>take one down, pass it around</a>`);
  }
});

app.get('/take-one-down/:numberOfBottles', (req, res) => {
  const newNumberOfBottles = parseInt(req.params.numberOfBottles);
  numberOfBottles = newNumberOfBottles;

  if (numberOfBottles === 0) {
    res.send("No more bottles of beer on the wall <br><a href='/'>Start over</a>");
  } else {
    res.send(`${numberOfBottles} Bottles of beer on the wall <br><a href='/take-one-down/${numberOfBottles - 1}'>take one down, pass it around</a>`);
  }
});


app.listen(PORT, () => {
    console.log(`Listening on port: ${PORT}`);
  });