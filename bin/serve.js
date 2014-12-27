'use strict';

var http = require('http')
  , port = process.argv[2] || 3000
  , server = http.createServer(require('../server').create())
  ;

server.listen(port, function() {
  console.log('Listening on http://localhost:' + port);
  
  console.log('Test these links in your browser:');
  console.log('    http://local.foobar3000.com:' + port
    + '/resize/api'
    + '?state=1'
    + '&url=http://i.imgur.com/qqpxDmJ.jpg'
  );
  console.log('    http://local.foobar3000.com:' + port
    + '/resize/api'
    + '?state=1'
    + '&width=200'
    + '&height=300'
    + '&format=gif'
    + '&quality=85'
    + '&url=http://i.imgur.com/qqpxDmJ.jpg'
  );

  console.log('');
});
