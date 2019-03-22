const fs = require('fs');
const path = require('path');
const fastify = require('fastify')({
  http2: true,
  https: {
    key: fs.readFileSync(__dirname + '/server.key'),
    cert: fs.readFileSync(__dirname + '/server.crt'),
  }
});

fastify.get('/', (res, reply) => {
  reply.code(200).send({ hello: 'world' });
});

fastify.listen(3000);