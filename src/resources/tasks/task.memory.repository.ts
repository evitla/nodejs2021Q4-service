import Task, { ITask } from './task.model';

let tasks: Task[] = [];

/**
 * Asynchronously returns all tasks
 */
export const getAllTasks = async (): Promise<Task[]> =>
  new Promise((resolve) => {
    resolve(tasks);
  });

/**
 * Asynchronously returns task by id.
 * Returns error if user not found for a given id
 * 
 * @param boardId - string in uuidv4 format
 * @param id - string in uuidv4 format
 */
export const getTaskById = async (boardId: string, id: string): Promise<Task> =>
  new Promise((resolve, reject) => {
    const task = tasks.find((t) => t.boardId === boardId && t.id === id);

    if (task === undefined) {
      reject(new Error(`Task ${id} not found`));
    } else {
      resolve(task);
    }
  });

/**
 * Asynchronously returns created task
 * 
 * @param boardId - string in uuidv4 format
 * @param taskData - user data with `id`, `title`, `order`, `description`, `userId`, `boardId` and `columnId` fields
 */
export const createTask = async (
  boardId: string,
  taskData: ITask
): Promise<Task> =>
  new Promise((resolve) => {
    const task = new Task({ ...taskData, boardId });

    tasks = [...tasks, task];

    resolve(task);
  });

/**
 * Asynchronously returns message `Task deleted successfully`
 * 
 * @param boardId - string in uuidv4 format
 * @param id - string in uuidv4 format
 */
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

/**
 * Asynchronously returns message `All board's tasks deleted`
 * 
 * @param id - string in uuidv4 format
 */
export const removeAllTasksByBoardId = async (
  boardId: string
): Promise<string> =>
  new Promise((resolve) => {
    tasks = tasks.filter((t) => t.boardId !== boardId);

    resolve(`All board's tasks deleted`);
  });

/**
 * Asynchronously returns updated task 
 * 
 * @param id - string in uuidv4 format
 * @param taskData - user data with `id`, `title`, `order`, `description`, `userId`, `boardId` and `columnId` fields
 */
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
