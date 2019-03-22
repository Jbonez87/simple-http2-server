const http2 = require('http2');
const fs = require('fs');

const options = {
  key: fs.readFileSync(__dirname + '/server.key'),
  cert: fs.readFileSync(__dirname + '/server.crt')
}

const server = http2.createSecureServer(options);

server.on('stream', (stream, headers) => {
  stream.respond({
    ':status': 200
  });
  stream.end('hello world');
});

server.listen(3000);