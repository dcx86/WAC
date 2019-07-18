var express = require('express');
var router = express.Router();
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";

router.post('/', function (req, res, next) {
  const getWeather = () => {
    fetch(`https://api.darksky.net/forecast/269bb9a5c92626a0f53367cd2c92f543/${req.body.lat},${req.body.long}?units=si`)
      .then(data => data.json())
      .then(result => {
        MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
          if (err) throw err;
          const dbo = db.db('mongo-mob');
          console.log(req.body.id);
          dbo.collection('users').updateOne({id: req.body.id }, {'$push': {'history': result}}, function (err, result) {
            if (err) throw err;
            res.send("Object added to database");
            db.close();
          });
        });
      });
  }
  getWeather();
});

module.exports = router;