import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import path from 'path';

import logger from './common/logger';
import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

const app = fastify({
  logger,
  disableRequestLogging: true,
});

app.register(fastifySwagger, {
  exposeRoute: true,
  routePrefix: '/doc',
  mode: 'static',
  specification: {
    baseDir: __dirname,
    path: path.join(__dirname, '../doc/api.yaml'),
  },
});

app.register(userRouter);
app.register(boardRouter);
app.register(taskRouter);

app.setErrorHandler((err, req, reply) => {
  logger.error(err);

  if (reply.statusCode >= 400 && reply.statusCode < 500) {
    app.log.info({ name: err.name, message: err.message });
    return;
  }

  app.log.error(err.message);
});

const errorHandler = (err: Error | null, event: string, origin = '') => {
  logger.fatal(err, event, { origin });

  setTimeout(() => {
    process.exit(1);
  }, 500);
};

process.on('uncaughtException', (err, origin) =>
  errorHandler(err, 'uncaughtException', origin)
);
process.on('unhandledRejection', () =>
  errorHandler(null, 'unhandledRejection')
);

export default app;
