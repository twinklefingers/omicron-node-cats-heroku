var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

app.set('port', process.env.PORT || 5000);

// catch-all for static files
app.get('/*', function(req, res) {
  var file = req.params[0] || '/views/index.html';
  console.log('file', file);
  res.sendFile(path.join(__dirname, './public', file));
});

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
