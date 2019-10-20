const http2 = require('http2');
const fs = require('fs');

const options = {
  key: fs.readFileSync(__dirname + '/localhost-privkey.pem'),
  cert: fs.readFileSync(__dirname + '/localhost-cert.pem')
}

const server = http2.createSecureServer(options);
server.on('error', (err) => console.error(err));

server.on('stream', stream => {
  stream.respondWithFile(__dirname + '/index.html', {
    "content-type": "text/html",
    ":status": 200
  });
});

server.listen(3000, () => console.log('listening on port 3000'));