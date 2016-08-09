var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.set('port', process.env.PORT || 5000);

app.listen(app.get('port'), function() {
  console.log('server is running on port ', app.get('port'));
});
