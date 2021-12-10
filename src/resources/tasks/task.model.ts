import { v4 as uuidv4 } from 'uuid';

class Task {
  readonly id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string | null;

  columnId: string | null;

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

export default Task;
