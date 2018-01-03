var path = require('path');
var express = require('express');


var app = express();
const port = process.env.PORT || 4000

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => console.log(`API Server listening on http://localhost:${port}`));
