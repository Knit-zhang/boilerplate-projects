const express = require('express');
const cors = require('cors');
const app = express();
const Url = require('./schema');
const connect = require('./db');
const validURL = require('valid-url');

// Basic Configuration
const port = process.env.PORT || 3000;

connect();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use('/public', express.static(`${process.cwd()}/public`));
app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

// Your first API endpoint
app.get('/api/hello', function(req, res) {
  res.json({ greeting: 'hello API' });
});

app.get('/api/shorturl/:urlID', async (req, res) => {
  const urlID = req.params.urlID;
  const url = await Url.findOne({shortId: urlID});
  if (url == null) return res.sendStatus(404);
  await res.redirect(url.longURL);
});

app.post('/api/shorturl', async (req, res) => {
  const originalUrl = req.body.url;
  if (validURL.isHttpUri(originalUrl) || validURL.isHttpsUri(originalUrl)) {
    const url = await Url.findOne({longURL: originalUrl});
    if (url == null) {
      await Url.create({longURL: originalUrl}).then(data => {
        console.log('create a new shorturl', originalUrl, ' ',data.shortId);
        res.json({original_url: data.longURL, short_url: data.shortId});
      })
    } else {
      url
      console.log('find an existed url', originalUrl, ' ', url.shortId);
      res.json({original_url: originalUrl, short_url: url.shortId});
    }
    
  } else {
    res.json({error: 'invalid url'});
  }
})

app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
