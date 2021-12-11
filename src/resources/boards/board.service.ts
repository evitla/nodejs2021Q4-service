import { FastifyReply } from 'fastify';
import { BoardRequest } from '../../common/types';
import * as boardsRepo from './board.memory.repository';
import { removeAllTasksByBoardId } from '../tasks/task.memory.repository';

export const getAll = async (req: BoardRequest, reply: FastifyReply) => {
  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

export const getById = async (req: BoardRequest, reply: FastifyReply) => {
  try {
    const board = await boardsRepo.getBoardById(req.params.id);

    reply.send(board);
  } catch (err) {
    reply.code(404).send(err);
  }
};

export const create = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.createBoard(req.body);
  reply.code(201).send(board);
};

export const remove = async (req: BoardRequest, reply: FastifyReply) => {
  const message = await boardsRepo.removeBoard(req.params.id);
  await removeAllTasksByBoardId(req.params.id);
  return reply.send(message);
};

export const update = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.updateBoard(req.params.id, req.body);
  reply.send(board);
};
