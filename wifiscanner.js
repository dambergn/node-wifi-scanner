'use strict';

const wifiscanner = require("wifiscanner");

//Returns appropriate instance of a wifi scanner
let scanner = wifiscanner();

scanner.scan(function (error, networks) {
  if (error) {
    console.error(error);
  } else {
    console.dir(networks);
  }
});