const taskController = require('./task.controller');

function router(fastify, options, done) {
  fastify.get('/boards/:boardId/tasks', taskController.getAll);
  fastify.get('/boards/:boardId/tasks/:id', taskController.getById);
  fastify.post('/boards/:boardId/tasks', taskController.create);
  fastify.delete('/boards/:boardId/tasks/:id', taskController.remove);
  fastify.put('/boards/:boardId/tasks/:id', taskController.update);

  done();
}

module.exports = router;
