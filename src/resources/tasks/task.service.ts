import { FastifyReply } from 'fastify';
import { TaskRequest } from '../../common/types';
import * as tasksRepo from './task.memory.repository';

/**
 * GET: get all tasks
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const getAll = async (req: TaskRequest, reply: FastifyReply) => {
  const tasks = await tasksRepo.getAllTasks();

  reply.send(tasks);
};

/**
 * GET: get task by boardId and task id
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const getById = async (req: TaskRequest, reply: FastifyReply) => {
  try {
    const task = await tasksRepo.getTaskById(req.params.boardId, req.params.id);
    reply.send(task);
  } catch (err) {
    reply.code(404).send(err);
  }
};

/**
 * POST: create task for a given boardId
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const create = async (req: TaskRequest, reply: FastifyReply) => {
  const task = await tasksRepo.createTask(req.params.boardId, req.body);
  reply.code(201).send(task);
};

/**
 * DELETE: delete task in a given boardId
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const remove = async (req: TaskRequest, reply: FastifyReply) => {
  const message = await tasksRepo.removeTask(req.params.boardId, req.params.id);
  reply.send(message);
};

/**
 * PUT: update task
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const update = async (req: TaskRequest, reply: FastifyReply) => {
  const updatedtask = await tasksRepo.updateTask(
    req.params.boardId,
    req.params.id,
    req.body
  );
  reply.send(updatedtask);
};
