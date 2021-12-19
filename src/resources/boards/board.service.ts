import { FastifyReply } from 'fastify';
import { BoardRequest } from '../../common/types';
import * as boardsRepo from './board.memory.repository';
import { removeAllTasksByBoardId } from '../tasks/task.memory.repository';

/**
 * GET: get all boards
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const getAll = async (req: BoardRequest, reply: FastifyReply) => {
  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

/**
 * GET: get board by id
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const getById = async (req: BoardRequest, reply: FastifyReply) => {
  try {
    const board = await boardsRepo.getBoardById(req.params.id);

    reply.send(board);
  } catch (err) {
    reply.code(404).send(err);
  }
};

/**
 * POST: create board
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const create = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.createBoard(req.body);
  reply.code(201).send(board);
};

/**
 * DELETE: delete board
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const remove = async (req: BoardRequest, reply: FastifyReply) => {
  const message = await boardsRepo.removeBoard(req.params.id);
  await removeAllTasksByBoardId(req.params.id);
  return reply.send(message);
};

/**
 * PUT: update board
 * 
 * @param req - http request
 * @param reply - fastify server reply
 */
export const update = async (req: BoardRequest, reply: FastifyReply) => {
  const board = await boardsRepo.updateBoard(req.params.id, req.body);
  reply.send(board);
};
