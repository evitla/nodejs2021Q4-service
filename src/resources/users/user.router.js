const userController = require('./user.controller');

function router(fastify, options, done) {
  fastify.get('/users', userController.getAll);
  fastify.get('/users/:id', userController.getById);
  fastify.post('/users', userController.create);
  fastify.delete('/users/:id', userController.remove);
  fastify.put('/users/:id', userController.update);

  done();
}

module.exports = router;
