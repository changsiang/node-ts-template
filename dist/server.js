"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = process.env.PORT || 3000;
app.listen(port);
console.log('RESTful API Server started on port ' + port);
