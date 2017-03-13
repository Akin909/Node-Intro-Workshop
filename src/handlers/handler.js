var fs = require('fs');
var path = require('path');


function serveLandingPage(request, response) {
    fs.readFile(path.join(__dirname, '..', '..', 'index.html'),
        function(err, file) {
            if (err) {
                throw new Error(err);
            }
            response.writeHead(200, 'Content-Type: text/html');
            response.end(file);
        });
}


function servePublic(request, response, url) {
    var extension = url.split('.')[1];
    var extensionType = {
        'html': 'text/html',
        'css': 'text/css',
        'js': 'application/javascript',
        'ico': 'image/x-icon'
    };
    fs.readFile(path.join(__dirname, '..', '..', url),
        function(err, file) {
            if (err) {
                throw new Error(err);
            }
            response.writeHead(200, {
                'Content-type': extensionType[extension]
            });
            response.end(file);
        });
}

function serveError() {
    response.writeHead(404, {
        'Content-Type': 'text/html'
    });
    response.end(
        '<h1> Error 404: Requested Page Not found </h1>'
    );
}



module.exports = {
    serveLandingPage,
    servePublic,
    serveError
};
