const User = require('./user.model');

let users = [];

const getAll = async () =>
  new Promise((resolve) => {
    resolve(users.map(User.toResponse));
  });

const getById = async (id) =>
  new Promise((resolve) => {
    const user = users.map(User.toResponse).find((u) => u.id === id);

    resolve(User.toResponse(user));
  });

const create = async (userData) =>
  new Promise((resolve) => {
    const user = new User({ ...userData });

    users = [...users, user];

    resolve(User.toResponse(user));
  });

const remove = async (id) =>
  new Promise((resolve) => {
    users = users.filter((u) => u.id !== id);

    resolve(`User deleted successfully`);
  });

const update = async (id, updatedUserData) =>
  new Promise((resolve) => {
    const user = users.find((u) => u.id === id);

    const updatedUser = new User({ ...user, ...updatedUserData });

    users = users.map((u) => (u.id === id ? updatedUser : u));

    resolve(User.toResponse(updatedUser));
  });

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
