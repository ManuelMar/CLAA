const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');
const passport = require('passport');
const cookieSession = require('cookie-session');
const bodyParser = require('body-parser');
require('./models/User');
require('./models/Event');
require('./services/passport');

mongoose.Promise = global.Promise;
mongoose.connect(keys.mongoURI);

const app = express();
app.get('/', (req, res) => {
  res.send({ hi: 'hello' });
  console.log('running');
});

app.use(bodyParser.json()); // bodyParser required by passport
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000, // cookie expiry
    keys: [keys.cookieKey] // cookie key: keep secret
  })
);

app.use(passport.initialize());
app.use(passport.session());

require('./routes/authRoutes')(app); // need app bc route is a funct
require('./routes/billingRoutes')(app);
require('./routes/eventRoutes')(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

//TODO add donation routes
//TODO add event creation and sharing -> how to make events common to everyone
