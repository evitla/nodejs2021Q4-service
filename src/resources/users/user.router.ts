import * as userService from './user.service';

const router = (fastify: any, options: any, done: any) => {
  fastify.get('/users', userService.getAll);
  fastify.get('/users/:id', userService.getById);
  fastify.post('/users', userService.create);
  fastify.delete('/users/:id', userService.remove);
  fastify.put('/users/:id', userService.update);

  done();
};

export default router;
