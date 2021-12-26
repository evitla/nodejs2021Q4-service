import Task, { ITask } from './task.model';

let tasks: Task[] = [];

export const getAllTasks = async (): Promise<Task[]> =>
  new Promise((resolve) => {
    resolve(tasks);
  });

export const getTaskById = async (boardId: string, id: string): Promise<Task> =>
  new Promise((resolve, reject) => {
    const task = tasks.find((t) => t.boardId === boardId && t.id === id);

    if (task === undefined) {
      reject(new Error(`Task ${id} not found`));
    } else {
      resolve(task);
    }
  });

export const createTask = async (
  boardId: string,
  taskData: ITask
): Promise<Task> =>
  new Promise((resolve) => {
    const task = new Task({ ...taskData, boardId });

    tasks = [...tasks, task];

    resolve(task);
  });

export const removeTask = async (
  boardId: string,
  id: string
): Promise<string> =>
  new Promise((resolve) => {
    let boardTasks = tasks.filter((t) => t.boardId === boardId);
    const restTasks = tasks.filter((t) => t.boardId !== boardId);

    boardTasks = boardTasks.filter((t) => t.id !== id);

    tasks = boardTasks.concat(restTasks);

    resolve(`Task deleted successfully`);
  });

export const removeAllTasksByBoardId = async (
  boardId: string
): Promise<string> =>
  new Promise((resolve) => {
    tasks = tasks.filter((t) => t.boardId !== boardId);

    resolve(`All board's tasks deleted`);
  });

export const updateTask = async (
  boardId: string,
  id: string,
  updatedTaskData: ITask
): Promise<Task> =>
  new Promise((resolve) => {
    const task = tasks.find((t) => t.boardId === boardId && t.id === id);

    const updatedTask = new Task({ ...task, ...updatedTaskData });

    tasks = tasks.map((t) =>
      t.boardId === boardId && t.id === id ? updatedTask : t
    );

    resolve(updatedTask);
  });
