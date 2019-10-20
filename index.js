const http2 = require('http2');
const fs = require('fs');

const options = {
  key: fs.readFileSync(__dirname + '/localhost-privkey.pem'),
  cert: fs.readFileSync(__dirname + '/localhost-cert.pem')
}

const server = http2.createSecureServer(options);

server.on('error', (err) => console.error(err));

server.on('stream', (stream, headers) => {
  stream.respond({
    ':status': 200
  });
  stream.end('hello world');
});

server.listen(3000, () => console.log('listening on port 3000'));