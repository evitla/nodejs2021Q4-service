import { v4 as uuidv4 } from 'uuid';

export interface IColumn {
  id: string;
  title: string;
  order: number;
}

class Column implements IColumn {
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
