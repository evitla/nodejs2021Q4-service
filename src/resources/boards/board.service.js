const boardsRepo = require('./board.memory.repository');

const getAll = async () => {
  const boards = await boardsRepo.getAll();
  return boards;
};

const getById = async (id) => {
  const board = await boardsRepo.getById(id);
  return board;
};

const create = async (boardData) => {
  const board = await boardsRepo.create(boardData);
  return board;
};

const remove = async (id) => {
  const message = await boardsRepo.remove(id);
  return message;
};

const update = async (id, updatedBoardData) => {
  const board = await boardsRepo.update(id, updatedBoardData);
  return board;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
