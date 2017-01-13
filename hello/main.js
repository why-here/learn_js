'use strict'

var greet = require('./hello');

var s = 'Why';
process.nextTick(function () {
    console.log('Fuck!');
});
process.on('exit', function (code) {
    console.log('about to exit with code: ' + code);
});
if (typeof(window) === 'undefined') {
    console.log('node.js');
} else {
    console.log('browser');
}
greet(s);
