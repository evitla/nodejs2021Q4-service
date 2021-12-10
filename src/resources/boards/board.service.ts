import * as boardsRepo from './board.memory.repository';
import { removeAllTasksByBoardId } from '../tasks/task.memory.repository';

export const getAll = async (req: any, reply: any) => {
  const boards = await boardsRepo.getAllBoards();
  reply.send(boards);
};

export const getById = async (req: any, reply: any) => {
  try {
    const board = await boardsRepo.getBoardById(req.params.id);

    reply.send(board);
  } catch (err: any) {
    reply.code(404).send(err.message);
  }
};

export const create = async (req: any, reply: any) => {
  const board = await boardsRepo.createBoard(req.body);
  reply.code(201).send(board);
};

export const remove = async (req: any, reply: any) => {
  const message = await boardsRepo.removeBoard(req.params.id);
  await removeAllTasksByBoardId(req.params.id);
  return reply.send(message);
};

export const update = async (req: any, reply: any) => {
  const board = await boardsRepo.updateBoard(req.params.id, req.body);
  reply.send(board);
};
