'use strict';

var connect = require('connect')
  , resizer = require('resize-as-a-service')
  , app = connect()
  ;

module.exports.create = function (conf) {
  app
    .use('/resize', resizer.create(conf))
    .use(function (req, res) {
      res.end('You probably thought this was a path to a real image... Nope. Chuck Testa!');
    })
    ;

  return app;
};
