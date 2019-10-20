const fs = require('fs');
const restify = require('restify');

const server = restify.createServer({
  http2: {
    cert: fs.readFileSync(__dirname + '/localhost-cert.pem'),
    key: fs.readFileSync(__dirname + '/localhost-privkey.pem'),
  }
});

server.get('/', (req, res, next) => {
  res.send({ hello: 'world' });
  next();
});

server.listen(3000, () => console.log('listening on port 3000'));