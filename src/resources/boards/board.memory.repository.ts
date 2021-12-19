import Board, { IBoard } from './board.model';
import Column from './column.model';

let boards: Board[] = [];

/**
 * Asynchronously returns all boards
 */
export const getAllBoards = async (): Promise<Board[]> =>
  new Promise((resolve) => {
    resolve(boards);
  });

/**
 * Asynchronously returns board by id.
 * Returns error if board not found for a given id
 * 
 * @param id - string in uuidv4 format
 */
export const getBoardById = async (id: string): Promise<Board> =>
  new Promise((resolve, reject) => {
    const board = boards.find((b) => b.id === id);

    if (board === undefined) {
      reject(new Error(`Board ${id} not found`));
    } else {
      resolve(board);
    }
  });

/**
 * Asynchronously returns created board
 * 
 * @param boardData - board data with `id`, `title` and `columns` fields
 */
export const createBoard = async (boardData: IBoard): Promise<Board> =>
  new Promise((resolve) => {
    const { columns } = boardData;

    const data = {
      ...boardData,
      columns: columns.map((col) => new Column(col)),
    };

    const board = new Board(data);

    boards = [...boards, board];

    resolve(board);
  });

/**
 * Asynchronously returns message `Board deleted successfully`
 * 
 * @param id - string in uuidv4 format
 */
export const removeBoard = async (id: string): Promise<string> =>
  new Promise((resolve) => {
    boards = boards.filter((b) => b.id !== id);

    resolve(`Board deleted successfully`);
  });

/**
 * Asynchronously returns updated board 
 * 
 * @param id - string in uuidv4 format
 * @param updatedBoardData - board data with `id`, `title` and `columns` fields
 */
export const updateBoard = async (
  id: string,
  updatedBoardData: IBoard
): Promise<Board> =>
  new Promise((resolve) => {
    const board = boards.find((b) => b.id === id);

    const updatedBoard = new Board({ ...board, ...updatedBoardData });

    boards = boards.map((b) => (b.id === id ? updatedBoardData : b));

    resolve(updatedBoard);
  });
