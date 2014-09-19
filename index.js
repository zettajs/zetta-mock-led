var AutoScout = require('zetta-auto-scout');
var LED = require('./led_driver');

module.exports = new AutoScout('led', LED);
