import User from './user.model';

let users: User[] = [];

export const getAllUsers = async () =>
  new Promise((resolve) => {
    resolve(users.map(User.toResponse));
  });

export const getUserById = async (id: string) =>
  new Promise((resolve) => {
    const user = users.find((u) => u.id === id);

    if (user !== undefined) {
      resolve(User.toResponse(user));
    }

  });

export const createUser = async (userData: any) =>
  new Promise((resolve) => {
    const user = new User({ ...userData });

    users = [...users, user];

    resolve(User.toResponse(user));
  });

export const removeUser = async (id: string) =>
  new Promise((resolve) => {
    users = users.filter((u) => u.id !== id);

    resolve(`User deleted successfully`);
  });

export const updateUser = async (id: string, updatedUserData: any) =>
  new Promise((resolve) => {
    const user = users.find((u) => u.id === id);

    const updatedUser = new User({ ...user, ...updatedUserData });

    users = users.map((u) => (u.id === id ? updatedUser : u));

    resolve(User.toResponse(updatedUser));
  });
