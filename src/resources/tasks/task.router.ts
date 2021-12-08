const taskService = require('./task.service');

module.exports = (fastify: any, options: any, done: any) => {
  fastify.get('/boards/:boardId/tasks', taskService.getAll);
  fastify.get('/boards/:boardId/tasks/:id', taskService.getById);
  fastify.post('/boards/:boardId/tasks', taskService.create);
  fastify.delete('/boards/:boardId/tasks/:id', taskService.remove);
  fastify.put('/boards/:boardId/tasks/:id', taskService.update);

  done();
};
