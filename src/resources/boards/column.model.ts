const { v4: uuidv4Column } = require('uuid');

class Column {
  readonly id: string;

  title: string;

  order: number;

  constructor({ id = uuidv4Column(), title = 'column title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

module.exports = Column;
