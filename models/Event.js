const mongoose = require('mongoose');
const { Schema } = mongoose;

const eventSchema = new Schema({
  title: String,
  description: String,
  image: String,
  location: String,
  date: String, // change to Date or consolidate
  time: String, // change to date later
  posted: Date,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  //attending: [attendSchema],
  yes: { type: Number, default: 0 },
  no: { type: Number, default: 0 }
});

mongoose.model('events', eventSchema);
/*export default [
  { label: 'Event Title', name: 'title' },
  { label: 'Description', name: 'description' },
  { label: 'Image link', name: 'image-link' },
  { label: 'location', name: 'location' },
  { label: 'Date', name: 'date' },
  { label: 'Time', name: 'time' }
];
*/
