const { v4: uuidv4 } = require('uuid');

class Task {
  constructor({
    id = uuidv4(),
    title = 'task title',
    order = 0,
    description = 'task description',
    boardId = null,
    columnId = null,
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = null;
    this.boardId = boardId;
    this.columnId = columnId;
  }
}

module.exports = Task;
