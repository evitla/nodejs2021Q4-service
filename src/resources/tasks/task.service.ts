import { FastifyReply } from 'fastify';
import { TaskRequest } from '../../common/types';
import * as tasksRepo from './task.memory.repository';

export const getAll = async (req: TaskRequest, reply: FastifyReply) => {
  const tasks = await tasksRepo.getAllTasks();

  reply.send(tasks);
};

export const getById = async (req: TaskRequest, reply: FastifyReply) => {
  try {
    const task = await tasksRepo.getTaskById(req.params.boardId, req.params.id);
    reply.send(task);
  } catch (err) {
    reply.code(404).send(err);
  }
};

export const create = async (req: TaskRequest, reply: FastifyReply) => {
  const task = await tasksRepo.createTask(req.params.boardId, req.body);
  reply.code(201).send(task);
};

export const remove = async (req: TaskRequest, reply: FastifyReply) => {
  const message = await tasksRepo.removeTask(req.params.boardId, req.params.id);
  reply.send(message);
};

export const update = async (req: TaskRequest, reply: FastifyReply) => {
  const updatedtask = await tasksRepo.updateTask(
    req.params.boardId,
    req.params.id,
    req.body
  );
  reply.send(updatedtask);
};
