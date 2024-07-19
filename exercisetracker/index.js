const express = require('express')
const app = express()
const cors = require('cors')
const { connect } = require('./mongodb');
const { User } = require('./mongodb');
const { Exercise } = require('./mongodb');

connect();

app.use(cors())
app.use(express.static('public'))
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
});

// post /api/users create a new user
app.post('/api/users', async (req, res) => {
  const username = req.body.username;
  let user = await User.findOne({name: username});
  if (!user && username != '') {
    user = await User.create({name: username});
    console.log(`create a new user: ${username}`);
  } else {
    console.log(`find an existed user: ${username}`);
  }
  res.json({username: user.name, _id: user._id});
});

// post /api/users/:_id/exercises add an exercise
app.post('/api/users/:_id/exercises', async (req, res) => {
  const uid = req.params._id;
  let { description, duration, date } = req.body;
  duration = parseInt(duration);
  date = date !== undefined ? new Date(date) : new Date();
  const user = await User.findById(uid);
  console.log(user.name, user._id, description, duration, date);
  await Exercise.create({
    name: user.name,
    userId: user._id,
    description,
    duration,
    date
  });
  res.json({
    username: user.name,
    description,
    duration: parseInt(duration),
    date: date.toDateString(),
    _id: user._id
  })
});

// get /api/users return all users
app.get('/api/users', async (req, res) => {
  const users = await User.find({}).select({__v: 0});
  res.json(users.map(({_id, name: username}) => ({username, _id}) ));
})

// get /api/users/:_id/logs?[from][&to][&limit] get all/selected exercise log
app.get('/api/users/:_id/logs', async (req, res) => {
  const uid = req.params._id;
  const user = await User.findById(uid);
  const { from, to, limit } = req.query;
  if (!user) res.json({error: "Could not find the user"});
  let logs = []
  const dateObj = {};
  if (from) {
    dateObj['$gte'] = new Date(from);
  }
  if (to) {
    dateObj['$lte'] = new Date(to);
  }
  const filter = {
    userId: uid
  }
  if (from || to) {
    filter.date = dateObj;
  }
 
  const exercises = await Exercise.find(filter).limit(limit ?? 500);
  const count = exercises.length;
  for (let i = 0, end = count; i < end; i++) {
    const { description, duration, date } = exercises[i];
    console.log(description, ' ', duration, ' ', date);
    logs.push({
      description,
      duration: parseInt(duration),
      date: date.toDateString()
    });
  }
  res.json({
    username: user.name,
    count,
    _id: uid,
    log: logs
  })
});

const listener = app.listen(process.env.PORT || 3000, () => {
  console.log('Your app is listening on port ' + listener.address().port)
})
