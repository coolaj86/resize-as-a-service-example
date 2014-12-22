'use strict';

var connect = require('connect')
  , path = require('path')
  , resizer = require('resize-as-a-service')
  , app = connect()
  , conf
  ;

conf = {
  imagesFolder: path.resolve(__dirname, 'images', 'resized')
, originalsFolder: path.resolve(__dirname, 'images', 'originals')
, apiRoute: '/api'
};

module.exports.create = function () {
  app
    .use('/resize', resizer.create(conf))
    .use(function (req, res) {
      res.end('You probably thought this was a path to a real image... Nope. Chuck Testa!');
    })
    ;

  return app;
};
