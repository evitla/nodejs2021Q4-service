import { FastifyReply } from 'fastify';
import { BoardRequest } from '../../common/types';
import * as boardsRepo from './board.memory.repository';
import { removeAllTasksByBoardId } from '../tasks/task.memory.repository';

export const getAll = async (req: BoardRequest, reply: FastifyReply) => {
  req.log.info({
    url: req.raw.url,
    method: req.method,
    statusCode: reply.raw.statusCode,
  });

  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

export const getById = async (req: BoardRequest, reply: FastifyReply) => {
  req.log.info({
    url: req.raw.url,
    id: req.params.id,
    method: req.method,
    statusCode: reply.raw.statusCode,
  });

  try {
    const board = await boardsRepo.getBoardById(req.params.id);

    reply.send(board);
  } catch (err) {
    reply.code(404).send(err);
  }
};

export const create = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.createBoard(req.body);

  req.log.info({
    url: req.raw.url,
    method: req.method,
    statusCode: reply.raw.statusCode,
    body: board,
  });

  reply.code(201).send(board);
};

export const remove = async (req: BoardRequest, reply: FastifyReply) => {
  req.log.info({
    url: req.raw.url,
    id: req.params.id,
    method: req.method,
    statusCode: reply.raw.statusCode,
  });

  const message = await boardsRepo.removeBoard(req.params.id);
  await removeAllTasksByBoardId(req.params.id);
  return reply.send(message);
};

export const update = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.updateBoard(req.params.id, req.body);
  req.log.info({
    url: req.raw.url,
    id: req.params.id,
    method: req.method,
    statusCode: reply.raw.statusCode,
    body: board,
  });
  reply.send(board);
};
