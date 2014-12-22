'use strict';

var http = require('http')
  , serve = require('../server')
  , port
  , server
  ;

port = port || process.argv[2] || 3000;

server = http.createServer(serve.create());
server.listen(port, function() {
  console.log('Listening on port ' + port);
});
