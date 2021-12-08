const { v4: uuidv4User } = require('uuid');

class User {
  readonly id: string;

  name: string;

  login: string;

  password: string;

  constructor({
    id = uuidv4User(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: User) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
