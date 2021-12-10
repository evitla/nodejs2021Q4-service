import User, { IUser, IUserToResponse } from './user.model';

let users: User[] = [];

/**
 * Asynchronously returns all users
 */
export const getAllUsers = async (): Promise<IUserToResponse[]> =>
  new Promise((resolve) => {
    resolve(users.map(User.toResponse));
  });

/**
 * Asynchronously returns user by id.
 * Returns error if user not found for a given id
 * 
 * @param id - string in uuidv4 format
 */
export const getUserById = async (id: string): Promise<IUserToResponse> =>
  new Promise((resolve, reject) => {
    const user = users.find((u) => u.id === id);

    if (user !== undefined) {
      resolve(User.toResponse(user));
    } else {
      reject(new Error(`User ${id} not found`));
    }
  });

/**
 * Asynchronously returns created user
 * 
 * @param userData - user data with `id`, `name`, `login` and `password` fields
 */
export const createUser = async (userData: IUser): Promise<IUserToResponse> =>
  new Promise((resolve) => {
    const user = new User(userData);

    users = [...users, user];

    resolve(User.toResponse(user));
  });

/**
 * Asynchronously returns message `User deleted successfully`
 * 
 * @param id - string in uuidv4 format
 */
export const removeUser = async (id: string): Promise<string> =>
  new Promise((resolve) => {
    users = users.filter((u) => u.id !== id);

    resolve(`User deleted successfully`);
  });

/**
 * Asynchronously returns updated user 
 * 
 * @param id - string in uuidv4 format
 * @param updatedUserData - user data with `id`, `name`, `login` and `password` fields
 */
export const updateUser = async (id: string, updatedUserData: IUser): Promise<IUserToResponse> =>
  new Promise((resolve) => {
    const user = users.find((u) => u.id === id);

    const updatedUser = new User({ ...user, ...updatedUserData });

    users = users.map((u) => (u.id === id ? updatedUser : u));

    resolve(User.toResponse(updatedUser));
  });
