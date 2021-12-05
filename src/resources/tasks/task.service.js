const tasksRepo = require('./task.memory.repository');

const getAll = async (boardId) => {
  const tasks = await tasksRepo.getAll(boardId);
  return tasks;
};

const getById = async (boardId, id) => {
  const task = await tasksRepo.getById(boardId, id);
  return task;
};

const create = async (boardId, taskData) => {
  const task = await tasksRepo.create(boardId, taskData);
  return task;
};

const remove = async (boardId, id) => {
  const message = await tasksRepo.remove(boardId, id);
  return message;
};

const update = async (boardId, id, updatedtaskData) => {
  const task = await tasksRepo.update(boardId, id, updatedtaskData);
  return task;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
