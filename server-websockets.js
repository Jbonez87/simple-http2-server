const http2 = require('http2');
const fs = require('fs');
const ws = require('ws');

const options = {
  key: fs.readFileSync(__dirname + '/localhost-privkey.pem'),
  cert: fs.readFileSync(__dirname + '/localhost-cert.pem'),
  allowHTTP1: true
}

const server = http2.createSecureServer(options);

server.on('request', (req, res) => {
  res.end('ok');
});

const wss = new ws.Server({ server });

wss.on('connection', ws => {
  ws.on('message', message => {
    console.log('recieved: %s', message)
  });
  ws.send('something');
});

server.listen(3000, () => console.log('listening on port 3000'));

