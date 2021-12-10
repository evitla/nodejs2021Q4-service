import * as boardService from './board.service';

const router = (fastify: any, options: any, done: any) => {
  fastify.get('/boards', boardService.getAll);
  fastify.get('/boards/:id', boardService.getById);
  fastify.post('/boards', boardService.create);
  fastify.delete('/boards/:id', boardService.remove);
  fastify.put('/boards/:id', boardService.update);

  done();
};

export default router;