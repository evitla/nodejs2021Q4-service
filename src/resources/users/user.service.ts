const usersRepo = require('./user.memory.repository');

module.exports = {
  getAll: async (req: any, reply: any) => {
    const users = await usersRepo.getAllUsers();

    reply.send(users);
  },

  getById: async (req: any, reply: any) => {
    const user = await usersRepo.getUserById(req.params.id);

    reply.send(user);
  },
  create: async (req: any, reply: any) => {
    const user = await usersRepo.createUser(req.body);

    reply.code(201).send(user);
  },
  remove: async (req: any, reply: any) => {
    const message = await usersRepo.removeUser(req.params.id);

    reply.code(200).send(message);
  },
  update: async (req: any, reply: any) => {
    const updatedUser = await usersRepo.updateUser(req.params.id, req.body);

    reply.code(200).send(updatedUser);
  },
};
