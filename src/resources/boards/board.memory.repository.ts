export {};

const Board = require('./board.model');
const Column = require('./column.model');

let boards: Board[] = [];

const getAllBoards = async () =>
  new Promise((resolve) => {
    resolve(boards);
  });

const getBoardById = async (id: any) =>
  new Promise((resolve, reject) => {
    const board = boards.find((b) => b.id === id);

    if (board === undefined) {
      reject(new Error(`Board ${id} not found`));
    } else {
      resolve(board);
    }
  });

const createBoard = async (boardData: any) =>
  new Promise((resolve) => {
    const { columns } = boardData;

    const data = {
      ...boardData,
      columns: columns.map((col: any) => new Column({ ...col })),
    };

    const board = new Board({ ...data });

    boards = [...boards, board];

    resolve(board);
  });

const removeBoard = async (id: any) =>
  new Promise((resolve) => {
    boards = boards.filter((b) => b.id !== id);

    resolve(`Board deleted successfully`);
  });

const updateBoard = async (id: any, updatedBoardData: any) =>
  new Promise((resolve) => {
    const board = boards.find((b) => b.id === id);

    const updatedBoard = new Board({ ...board, ...updatedBoardData });

    boards = boards.map((b) => (b.id === id ? updatedBoardData : b));

    resolve(updatedBoard);
  });

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  removeBoard,
  updateBoard,
};
