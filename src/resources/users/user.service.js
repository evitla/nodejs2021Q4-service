const usersRepo = require('./user.memory.repository');

const getAll = async () => {
  const users = await usersRepo.getAll();
  return users;
};

const getById = async (id) => {
  const user = await usersRepo.getById(id);
  return user;
};

const create = async (userData) => {
  const user = await usersRepo.create(userData);
  return user;
};

const remove = async (id) => {
  const message = await usersRepo.remove(id);
  return message;
};

const update = async (id, updatedUserData) => {
  const user = await usersRepo.update(id, updatedUserData);
  return user;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
