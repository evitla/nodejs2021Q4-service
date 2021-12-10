import * as tasksRepo from './task.memory.repository';

export const getAll = async (req: any, reply: any) => {
  const tasks = await tasksRepo.getAllTasks();

  reply.send(tasks);
};

export const getById = async (req: any, reply: any) => {
  try {
    const task = await tasksRepo.getTaskById(
      req.params.boardId,
      req.params.id
    );
    reply.send(task);
  } catch (err: any) {
    reply.code(404).send(err.message);
  }
};

export const create = async (req: any, reply: any) => {
  const task = await tasksRepo.createTask(req.params.boardId, req.body);
  reply.code(201).send(task);
};

export const remove = async (req: any, reply: any) => {
  const message = await tasksRepo.removeTask(
    req.params.boardId,
    req.params.id
  );
  reply.send(message);
};

export const update = async (req: any, reply: any) => {
  const updatedtask = await tasksRepo.updateTask(
    req.params.boardId,
    req.params.id,
    req.body
  );
  reply.send(updatedtask);
};
