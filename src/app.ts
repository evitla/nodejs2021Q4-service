import fastify from 'fastify';
import fastifySwagger from 'fastify-swagger';
import path from 'path';

import userRouter from './resources/users/user.router';
import boardRouter from './resources/boards/board.router';
import taskRouter from './resources/tasks/task.router';

const app = fastify({ logger: true });

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

export default app;
