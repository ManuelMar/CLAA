const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
require('./models/User');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.get('/', (req, res) => {
  res.send({ hi: 'hello' });
  console.log('running');
});

app.use(bodyParser.json());
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // need app bc route is a funct

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//TODO: 1 setup auth model + routes -> done
//TODO: install passport + define strategy + wire up -> done
// TODO: integrate front end
