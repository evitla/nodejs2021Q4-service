const { v4: uuidv4Task } = require('uuid');

class Task {
  readonly id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | null;

  columnId: string | null;

  constructor({
    id = uuidv4Task(),
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
