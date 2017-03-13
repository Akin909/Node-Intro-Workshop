var fs = require('fs');
var path = require('path');
var serveLandingPage = require('../handlers/handler.js').serveLandingPage;
var servePublic = require('../handlers/handler.js').servePublic;
var serveError = require('../handlers/handler.js').serveError;


function router(request, response) {
    var url = request.url;
    if (url === '/') {
        serveLandingPage(request,response);
    } else if (url.indexOf('public') !== -1) {
        servePublic(request,response,url);
    } else {
        serveError();
    }
}

module.exports = router;
