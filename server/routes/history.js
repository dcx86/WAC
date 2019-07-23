const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
// const getCollection = require('mongodb').getCollection;

router.post('/', function (req, res, next) {
  MongoClient.connect(url, { useNewUrlParser: true }, function (err, db) {
    if (err) throw err;
    const dbo = db.db('mongo-mob');
    const auth = req.body
    const user = {
      ...req.body,
    }
    dbo.collection('users').find({}, {projection: {_id: 0, id:1 , history:1}}).toArray( function (err, result) {
      if (err) throw err;
      const userData = result.find(user => user.id === auth.id)
      if (userData) {
        const aqi = userData.history.map(e => e.aq.aqius)
        console.log(userData);
        console.log(aqi , "treeeeeeeeeeeeeeeeeeeee");
        res.send(aqi)
        db.close();
      }
      db.close();
    });  
  });
});


module.exports = router;