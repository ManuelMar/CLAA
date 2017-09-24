const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  googleID: String, // profile.id
  displayName: String, // profile.name.givenName
  image: String, // profile._json.image.url
  credits: { type: Number, default: 0 }
});

mongoose.model('users', userSchema); // 2 args means store new class with name 'users'
