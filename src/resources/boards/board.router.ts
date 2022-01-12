import { FastifyInstance, FastifyServerOptions } from 'fastify';
import * as boardService from './board.service';

const boardRouter = (
  fastify: FastifyInstance,
  options: FastifyServerOptions,
  done: () => void
) => {
  fastify.get('/boards', boardService.getAll);
  fastify.get('/boards/:id', boardService.getById);
  fastify.post('/boards', boardService.create);
  fastify.delete('/boards/:id', boardService.remove);
  fastify.put('/boards/:id', boardService.update);

  done();
};

export default boardRouter;
