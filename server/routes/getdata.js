var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

router.post('/', function (req, res, next) {
  Promise.all([
    fetch(`https://api.darksky.net/forecast/269bb9a5c92626a0f53367cd2c92f543/${req.body.lat},${req.body.long}?units=si`)
      .then(data => data.json())
      .then(result => result.currently)
     ,
    fetch(`https://api.opencagedata.com/geocode/v1/json?q=${req.body.lat}+${req.body.long}&key=23b22f3e3bae489bb643f74b0990ff27&pretty=1}`)
      .then(response => response.json())
      .then(data => ({city: data.results[0].components.city, district: data.results[0].components.city_district}))
    ,
    fetch(`https://api.airvisual.com/v2/nearest_city?key=9ed73e58-615d-476d-a4d0-7ae04d620376`)
      .then(response => response.json())
      .then(data => data.data.current.pollution),
    fetch(`https://api.co2signal.com/v1/latest?lon=${req.body.long}&lat=${req.body.lat}`, {headers : {'auth-token': '7956efce40b948ec'} })
      .then(data => data.json())

  ]).then(([weather, location, aq, co2]) => console.log(co2))
    .catch(err => console.log(err))
});

module.exports = router;

function transferToDb(result, req, res) {
  MongoClient.connect(url, {
    useNewUrlParser: true
  }, function (err, db) {
    if (err)
      throw err;
    const dbo = db.db('mongo-mob');
    const currently = result.currently;
    dbo.collection('users').updateOne({
      id: req.body.id
    }, {
      '$set': {
        'history': currently
      }
    }, function (err, result) {
      if (err)
        throw err;
      res.send(currently);
      db.close();
    });
  });
}
