const Board = require('./board.model');
const Column = require('./column.model');

let boards = [];

const getAll = async () =>
  new Promise((resolve) => {
    resolve(boards);
  });

const getById = async (id) =>
  new Promise((resolve, reject) => {
    const board = boards.find((b) => b.id === id);

    if (board === undefined) {
      reject(new Error(`Board ${id} not found`));
    } else {
      resolve(board);
    }
  });

const create = async (boardData) =>
  new Promise((resolve) => {
    const { columns } = boardData;

    const data = {
      ...boardData,
      columns: columns.map((col) => new Column({ ...col })),
    };

    const board = new Board({ ...data });

    boards = [...boards, board];

    resolve(board);
  });

const remove = async (id) =>
  new Promise((resolve) => {
    boards = boards.filter((b) => b.id !== id);

    resolve(`Board deleted successfully`);
  });

const update = async (id, updatedBoardData) =>
  new Promise((resolve) => {
    const board = boards.find((b) => b.id === id);

    const updatedBoard = new Board({ ...board, ...updatedBoardData });

    boards = boards.map((b) => (b.id === id ? updatedBoardData : b));

    resolve(updatedBoard);
  });

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
};
