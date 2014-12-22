'use strict';

var http = require('http')
  , path = require('path')
  , serve = require('../server')
  , conf
  , port
  , server
  ;

conf = {
  imagesFolder: path.resolve(__dirname, '..', 'images', 'resized')
, originalsFolder: path.resolve(__dirname, '..', 'images', 'originals')
, imagesRoute: '/images'
, apiRoute: '/api'
};


port = port || process.argv[2] || 3000;

server = http.createServer(serve.create(conf));
server.listen(port, function() {
  console.log('Listening on port ' + port);
});
