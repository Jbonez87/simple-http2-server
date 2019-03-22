const fastify = require('fastify');
const server = fastify({ http2: true });

server.register(require('fastify-http-proxy'), {
  upstream: 'http://localhost:3000',
  prefix: '/',
  http2: true
});

server.listen(3000);