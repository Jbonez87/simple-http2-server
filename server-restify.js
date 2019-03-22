const fs = require('fs');
const restify = require('restify');

const server = restify.createServer({
  http2: {
    cert: fs.readFileSync(__dirname + '/server.crt'),
    key: fs.readFileSync(__dirname + '/server.key'),
    ca: fs.readFileSync(__dirname + '/server.csr'),
  }
});

server.get('/', (req, res, next) => {
  res.send({ hello: 'world' });
  next();
});

server.listen(3000);