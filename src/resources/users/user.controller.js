const usersService = require('./user.service');

const getAll = async (req, reply) => {
  const users = await usersService.getAll();

  reply.send(users);
};

const getById = async (req, reply) => {
  const user = await usersService.getById(req.params.id);

  reply.send(user);
};

const create = async (req, reply) => {
  const user = await usersService.create(req.body);

  reply.code(201).send(user);
};

const remove = async (req, reply) => {
  const message = await usersService.remove(req.params.id);

  reply.code(200).send(message);
};

const update = async (req, reply) => {
  const updatedUser = await usersService.update(req.params.id, req.body);

  reply.code(200).send(updatedUser);
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
