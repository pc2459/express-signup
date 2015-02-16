var express = require('express');

var app = express();
app.set('view engine', 'jade');
app.set('views', __dirname + '/views');

app.get('/', function(req, res) {
	res.render('form');
});

app.get('/success', function(req, res) {
  res.render('success');
});

app.post('/formsubmit', function(req, res) {
  res.redirect('success');
});

var server = app.listen(6333, function() {
	console.log('Express server listening on port ' + server.address().port);
});
