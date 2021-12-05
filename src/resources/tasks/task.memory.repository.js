const Task = require('./task.model');

let tasks = [];

const getAll = async () =>
  new Promise((resolve) => {
    resolve(tasks);
  });

const getById = async (boardId, id) =>
  new Promise((resolve, reject) => {
    const task = tasks.find((t) => t.boardId === boardId && t.id === id);

    if (task === undefined) {
      reject(new Error(`Task ${id} not found`));
    } else {
      resolve(task);
    }
  });

const create = async (boardId, taskData) =>
  new Promise((resolve) => {
    const task = new Task({ ...taskData, boardId });

    tasks = [...tasks, task];

    resolve(task);
  });

const remove = async (boardId, id) =>
  new Promise((resolve) => {
    // tasks = tasks.filter((t) => t.boardId !== boardId && t.id !== id);
    let boardTasks = tasks.filter((t) => t.boardId === boardId);
    const restTasks = tasks.filter((t) => t.boardId !== boardId);

    boardTasks = boardTasks.filter((t) => t.id !== id);

    tasks = boardTasks.concat(restTasks);

    resolve(`Task deleted successfully`);
  });

const removeAllByBoardId = async (boardId) =>
  new Promise((resolve) => {
    tasks = tasks.filter((t) => t.boardId !== boardId);

    resolve(`All board's tasks deleted`);
  });

const update = async (boardId, id, updatedTaskData) =>
  new Promise((resolve) => {
    const task = tasks.find((t) => t.boardId === boardId && t.id === id);

    const updatedTask = new Task({ ...task, ...updatedTaskData });

    tasks = tasks.map((t) =>
      t.boardId === boardId && t.id === id ? updatedTask : t
    );

    resolve(updatedTask);
  });

module.exports = {
  getAll,
  getById,
  create,
  remove,
  removeAllByBoardId,
  update,
};
