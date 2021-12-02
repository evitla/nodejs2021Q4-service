const fastify = require('fastify')({ logger: true });
const swaggerUI = require('fastify-swagger');
const path = require('path');
const userRouter = require('./resources/users/user.router');
const boardRouter = require('./resources/boards/board.router');

fastify.register(swaggerUI, {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    path: path.join(__dirname, '../doc/api.yaml'),
  },
});

fastify.register(userRouter);
fastify.register(boardRouter);

const app = fastify;

module.exports = app;
