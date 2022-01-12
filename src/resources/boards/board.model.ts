import { v4 as uuidv4 } from 'uuid';
import { IColumn } from './column.model';

export interface IBoard {
  id: string;
  title: string;
  columns: IColumn[];
}

class Board implements IBoard {
  readonly id: string;

  title: string;

  columns: IColumn[];

  constructor({ id = uuidv4(), title = 'board title', columns = [] }: IBoard) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }
}

export default Board;
