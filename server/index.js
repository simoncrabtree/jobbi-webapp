
var express = require('express');
var app = express();

require('./Routes')(app);
/* Required Route Files */

module.exports = app;
