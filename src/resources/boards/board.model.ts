const { v4: uuidv4Board } = require('uuid');

class Board {
  readonly id: string;

  title: string;

  columns: Column[];

  constructor({
    id = uuidv4Board(),
    title = 'board title',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

module.exports = Board;
