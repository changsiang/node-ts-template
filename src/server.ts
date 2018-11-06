import * as express from 'express';

var app = express();
var port = process.env.PORT || 3000;

app.listen(port);

console.log('RESTful API Server started on port ' + port);