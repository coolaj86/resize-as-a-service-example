'use strict';

var PromiseA = require('bluebird')
  , request = PromiseA.promisify(require('request'))
  ;

function checkip(ip) {
  var os = require('os');
  var ifaces = os.networkInterfaces();

  return Object.keys(ifaces).some(function (ifname) {
    return ifaces[ifname].some(function (iface) {
      return iface.address === ip;
    });
  });
}

function getExternalIp() {
  return request({ url: 'https://api.ipify.org' }).spread(function (req, data) {
    return checkip(data) && data;
  });
}

module.exports.getExternalIp = getExternalIp;

// en0 192.168.1.101
// eth0 10.0.0.101
