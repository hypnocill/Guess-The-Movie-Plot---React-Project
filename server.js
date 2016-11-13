var express = require('express');

var path = require('path');

var app = express();

app.use(express.static('src'));

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'src/index.html'))
})

app.listen(3000, function () {
  console.log('Express server is up on port 3000');
});
