module.exports = app => {
  app.get('/api/stripe', (req, res) => {
    res.send('hi');
  });
};
