import { FastifyInstance, FastifyServerOptions } from 'fastify';
import * as taskService from './task.service';

/**
 * Routes for task rest endpoints
 * 
 * @param fastify - fastify server instance
 * @param options - options for fastify server instance
 * @param done - callback function to continue with fastify lifecycle
 */
const taskRouter = (
  fastify: FastifyInstance,
  options: FastifyServerOptions,
  done: () => void
) => {
  fastify.get('/boards/:boardId/tasks', taskService.getAll);
  fastify.get('/boards/:boardId/tasks/:id', taskService.getById);
  fastify.post('/boards/:boardId/tasks', taskService.create);
  fastify.delete('/boards/:boardId/tasks/:id', taskService.remove);
  fastify.put('/boards/:boardId/tasks/:id', taskService.update);

  done();
};

export default taskRouter;
