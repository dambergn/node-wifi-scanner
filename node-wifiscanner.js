'use strict';

// var wifiscanner = require('./wifiscanner.js');
var wifiscanner = require('node-wifiscanner');

wifiscanner.scan(function (err, data) {
  if (err) {
    console.log("Error : " + err);
    return;
  }

  console.log(data);
});