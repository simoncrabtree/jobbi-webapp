
module.exports = function(app){

  app.get('/api/s', function(req, res) {
    res.send('You hit an ExpressJS route!');
  });

  app.get('/api//:id', function(req, res) {
    res.send('You hit an ExpressJS route with ' + req.params.id);
  });

  app.post('/api/s', function(req, res) {
    
  });

  app.put('/api//:id', function(req, res) {

  });

  app.delete('/api//:id', function(req, res) {

  });

};
