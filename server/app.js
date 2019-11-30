const express = require('express');
const bodyParser = require('body-parser');
const trafficMeister = require('./index.js');

const app = express();


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/types', async (req, res, next) => {
  try {
    await trafficMeister.fetchData(function(err, data) {
      res.json(data)
    });
} catch (e) {
    //this will eventually be handled by your error handling middleware
    next(e) 
  }
})
  // respuesta = {
  //  error: false,
  //  codigo: 200,
  //  mensaje: ''
  // };

app.get('/', function (req, res) {
  res.send('backend');
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});

