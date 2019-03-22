const http2 = require('http2');
const fs = require('fs');

const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
}

const server = http2.createSecureServer(options);

server.on('stream', stream => {
  stream.respondWithFile('./index.html');
});

server.listen(3000);