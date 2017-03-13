var http = require('http');
var port = 4000;
var router = require('./routers/router'); 

var server = http.createServer(router);
server.listen(port, function() {
    console.log('server is up on port:', port);
});
