export {};

const User = require('./user.model');

let users: User[] = [];

const getAllUsers = async () =>
  new Promise((resolve) => {
    resolve(users.map(User.toResponse));
  });

const getUserById = async (id: any) =>
  new Promise((resolve) => {
    const user = users.map(User.toResponse).find((u: any) => u.id === id);

    resolve(User.toResponse(user as any));
  });

const createUser = async (userData: any) =>
  new Promise((resolve) => {
    const user = new User({ ...userData });

    users = [...users, user];

    resolve(User.toResponse(user));
  });

const removeUser = async (id: any) =>
  new Promise((resolve) => {
    users = users.filter((u) => u.id !== id);

    resolve(`User deleted successfully`);
  });

const updateUser = async (id: any, updatedUserData: any) =>
  new Promise((resolve) => {
    const user = users.find((u) => u.id === id);

    const updatedUser = new User({ ...user, ...updatedUserData });

    users = users.map((u) => (u.id === id ? updatedUser : u));

    resolve(User.toResponse(updatedUser));
  });

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  removeUser,
  updateUser,
};
