const boardService = require('./board.service');

const getAll = async (req, reply) => {
  const boards = await boardService.getAll();
  reply.send(boards);
};

const getById = async (req, reply) => {
  try {
    const board = await boardService.getById(req.params.id);

    reply.send(board);
  } catch (err) {
    reply.code(404).send(err.message);
  }
};

const create = async (req, reply) => {
  const board = await boardService.create(req.body);
  reply.code(201).send(board);
};

const remove = async (req, reply) => {
  const message = await boardService.remove(req.params.id);
  return reply.send(message);
};

const update = async (req, reply) => {
  const board = await boardService.update(req.params.id, req.body);
  reply.send(board);
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
