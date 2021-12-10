import { v4 as uuidv4 } from 'uuid';

class Column {
  readonly id: string;

  title: string;

  order: number;

  constructor({ id = uuidv4(), title = 'column title', order = 0 } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
  }
}

export default Column;
