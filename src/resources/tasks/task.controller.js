const tasksService = require('./task.service');

const getAll = async (req, reply) => {
  const tasks = await tasksService.getAll(req.params.boardId);

  reply.send(tasks);
};

const getById = async (req, reply) => {
  try {
    const task = await tasksService.getById(req.params.boardId, req.params.id);

    reply.send(task);
  } catch (err) {
    reply.code(404).send(err.message);
  }
};

const create = async (req, reply) => {
  const task = await tasksService.create(req.params.boardId, req.body);

  reply.code(201).send(task);
};

const remove = async (req, reply) => {
  const message = await tasksService.remove(req.params.boardId, req.params.id);

  reply.send(message);
};

const update = async (req, reply) => {
  const updatedtask = await tasksService.update(
    req.params.boardId,
    req.params.id,
    req.body
  );

  reply.send(updatedtask);
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
