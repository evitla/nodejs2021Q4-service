import { v4 as uuidv4 } from 'uuid';

export interface IUserToResponse {
  id: string;
  name: string;
  login: string;
}

export interface IUser extends IUserToResponse {
  password: string;
}

class User implements IUser {
  readonly id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuidv4(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * Returns user's all fields except password
   * 
   * @param user - instance of User class
   */
  static toResponse(user: User): IUserToResponse {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

export default User;
