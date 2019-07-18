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
          const currently = result.currently;
          dbo.collection('users').updateOne({id: req.body.id }, {'$set': {'history': currently}}, function (err, result) { //REMEMBER TO CHANGE TO PUSH
            if (err) throw err;
            res.send(currently);
            db.close();
          });
        });
      });
  }
  getWeather();
});


// router.get('/', function (req, res, next) {
//   MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
//     if (err) throw err;
//     const dbo = db.db('mongo-mob');
//     dbo.collection("users").find().toArray(function (err, result) {
//       if (err) throw err;
//       console.log(result)
//       res.send(result);
//       db.close();
//     });
//   });
// });


module.exports = router;