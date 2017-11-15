const _ = require('lodash');
const requireLogin = require('../middlewares/requireLogin');
const mongoose = require('mongoose');

const Event = mongoose.model('events');

module.exports = app => {
  app.get('/api/events', requireLogin, async (req, res) => {
    const events = await Event.find().sort('-date').limit(10);
    console.log(events);
    res.send(events);
  });

  app.post('/api/events', requireLogin, async (req, res) => {
    console.log(req.body);
    const { title, description, imageLink, location, date, time } = req.body;

    const event = new Event({
      title,
      description,
      image: imageLink,
      location,
      date,
      time,
      posted: Date.now()
    });

    try {
      await event.save();
      const user = await req.user.save();
      res.send(user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};

/*export default [
  { label: 'Event Title', name: 'title' },
  { label: 'Description', name: 'description' },
  { label: 'Image link', name: 'image-link' },
  { label: 'location', name: 'location' },
  { label: 'Date', name: 'date' },
  { label: 'Time', name: 'time' }
];
*/
