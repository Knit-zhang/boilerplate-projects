const express = require('express');
const cors = require('cors');
const multer = require('multer');
require('dotenv').config()
const upload = multer({ fileFilter(req, file, callback) {
  file.originalname = Buffer.from(file.originalname, "latin1").toString(
    "utf8"
  );
  callback(null, true);
}, })

const app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});


app.post('/api/fileanalyse', upload.single('upfile'), (req, res) => {
  const name = req.file.originalname;
  res.json({
    name,
    type: req.file.mimetype,
    size: req.file.size 
  })
  console.log(
    name,
    req.file.mimetype,
    req.file.size 
  );
})

const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});
