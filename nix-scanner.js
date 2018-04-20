'use strict';

var cmd = require('node-cmd');

cmd.get(
  'iwlist scan',
  function (err, data, stderr) {

    let results = data.split('\n');
    // let ssid = data.split('ESSID:');
    // let address = data.split('Address')
    // console.log('scan results : ', address);
    // let split1 = address[1].split('Channel');
    // console.log('split1', split1);
    // console.log('address', split1[0]);
    console.log(results[0]);
    console.log(results[1]);
    console.log(results[2]);
  }
);