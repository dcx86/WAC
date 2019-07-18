var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');

router.post('/', function (req, res, next) {
  const getWeather = () => {
    fetch(`https://api.darksky.net/forecast/269bb9a5c92626a0f53367cd2c92f543/${req.body.lat},${req.body.long}?units=si`)
      .then(data => data.json())
      .then(result => {
        console.log(result);
      });
  }
  getWeather();
  res.send('PostData is working properly, sucker.');
});

module.exports = router;