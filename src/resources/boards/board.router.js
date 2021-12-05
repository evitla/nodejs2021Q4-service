const boardController = require('./board.controller');

function router(fastify, options, done) {
  fastify.get('/boards', boardController.getAll);
  fastify.get('/boards/:id', boardController.getById);
  fastify.post('/boards', boardController.create);
  fastify.delete('/boards/:id', boardController.remove);
  fastify.put('/boards/:id', boardController.update);

  done();
}

module.exports = router;
