const fs = require('fs');
// const path = require('path');
const fastify = require('fastify')({
  http2: true,
  https: {
    key: fs.readFileSync(__dirname + '/localhost-privkey.pem'),
    cert: fs.readFileSync(__dirname + '/localhost-cert.pem'),
  }
});

fastify.get('/', (res, reply) => {
  reply.code(200).send({ hello: 'world' });
});

fastify.listen(3000, () => console.log('listening on port 3000'));