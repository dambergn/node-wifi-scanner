'use strict';

var iwlist = require('wireless-tools/iwlist');
 
iwlist.scan('wlan0', function(err, networks) {
  console.log(networks);
});
 
iwlist.scan({ iface : 'wlan0', show_hidden : true }, function(err, networks) {
  console.log(networks);
});