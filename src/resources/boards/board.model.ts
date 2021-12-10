import { v4 as uuidv4 } from 'uuid';
import Column from './column.model';

class Board {
  readonly id: string;

  title: string;

  columns: Column[];

  constructor({
    id = uuidv4(),
    title = 'board title',
    columns = [],
  } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
