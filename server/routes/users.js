const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";


router.post('/', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mongo-mob");
    const myobj = req.body;
    dbo.collection("post").insert(myobj, function (err, result) {
      if (err) throw err;
      res.send("Object added to database");
      db.close();
    });
  });
});


/* GET users listing. */
router.get('/', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db("mongo-mob");
    dbo.collection("post").find().toArray(function (err, result) {
      if (err) throw err;
      res.send(result);
      db.close();
    });
  });
});

module.exports = router;
