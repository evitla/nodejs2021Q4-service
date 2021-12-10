import Task from './task.model';

let tasks: Task[] = [];

export const getAllTasks = async () =>
  new Promise((resolve) => {
    resolve(tasks);
  });

export const getTaskById = async (boardId: any, id: any) =>
  new Promise((resolve, reject) => {
    const task = tasks.find((t) => t.boardId === boardId && t.id === id);

    if (task === undefined) {
      reject(new Error(`Task ${id} not found`));
    } else {
      resolve(task);
    }
  });

export const createTask = async (boardId: any, taskData: any) =>
  new Promise((resolve) => {
    const task = new Task({ ...taskData, boardId });

    tasks = [...tasks, task];

    resolve(task);
  });

export const removeTask = async (boardId: any, id: any) =>
  new Promise((resolve) => {
    let boardTasks = tasks.filter((t) => t.boardId === boardId);
    const restTasks = tasks.filter((t) => t.boardId !== boardId);

    boardTasks = boardTasks.filter((t) => t.id !== id);

    tasks = boardTasks.concat(restTasks);

    resolve(`Task deleted successfully`);
  });

export const removeAllTasksByBoardId = async (boardId: any) =>
  new Promise((resolve) => {
    tasks = tasks.filter((t) => t.boardId !== boardId);

    resolve(`All board's tasks deleted`);
  });

export const updateTask = async (boardId: any, id: any, updatedTaskData: any) =>
  new Promise((resolve) => {
    const task = tasks.find((t) => t.boardId === boardId && t.id === id);

    const updatedTask = new Task({ ...task, ...updatedTaskData });

    tasks = tasks.map((t) =>
      t.boardId === boardId && t.id === id ? updatedTask : t
    );

    resolve(updatedTask);
  });
