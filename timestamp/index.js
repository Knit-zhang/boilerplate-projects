// index.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionsSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

/**
 * Log middleware
 * @param {req} request
 * @param {res} response
 * @param {next} middleware next function
 */
const Logger = function(req, res, next) {
  console.log("************Log***Start**********");
  console.log(`${req.method} ${req.path} - ${req.ip}`);
  if (req.params.date_string) console.log(`input date_string: ${req.params.date_string ? req.params.date_string : 'empty'}`);
  next();
}

app.use(Logger);

// your first API endpoint... 
app.get("/api/hello", function (req, res) {
  res.json({greeting: 'hello API'});
});

const UnixReg = /^\d{5,}$/;
app.get('/api/', function(req, res) {
  const date = new Date();
  res.send({unix: +date, utc: date.toUTCString()});
  console.log(({unix: +date, utc: date.toUTCString()}));
  console.log("************Log****End**********");
  console.log();
});

app.get('/api/:date_string', function(req, res) {
  const date_string = req.params.date_string;
  let date;
  if (UnixReg.test(date_string)) date = new Date(parseInt(date_string));
  else date = new Date(date_string);

  if (date.toString() === 'Invalid Date') {
    res.send({error: date.toString()});
    console.log({error: date.toString()})
  } else {
    res.send({unix: +date, utc: date.toUTCString()});
    console.log({unix: +date, utc: date.toUTCString()})
  }
  console.log("************Log****End**********");
  console.log();
});



// Listen on port set in environment variable or default to 3000
var listener = app.listen(process.env.PORT || 3000, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
