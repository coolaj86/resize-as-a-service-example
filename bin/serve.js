'use strict';

var http = require('http')
  , port = process.argv[2] || 3000
  , ifcheck = require('../ifcheck')
  , server = http.createServer(require('../server').create())
  ;

ifcheck.getExternalIp().then(function (ip) {
  var host = ip || 'localhost'
    , fqdn = ip || 'local.foobar3000.com'
    ;

  server.listen(port, function() {
    console.log('\n', 'Listening on http://' + host + ':' + port, '\n');
    
    console.log('Test these links in your browser:');
    console.log('    http://' + fqdn + ':' + port
      + '/resize/api?state=1'
      + '&url=http://i.imgur.com/qqpxDmJ.jpg'
    );
    console.log('    http://' + fqdn + ':' + port
      + '/resize/api?'
      + ['state=1', 'width=200', 'height=300', 'format=gif', 'quality=85'].join('&')
      + '&url=http://i.imgur.com/qqpxDmJ.jpg'
    );

    console.log('');
  });
});
