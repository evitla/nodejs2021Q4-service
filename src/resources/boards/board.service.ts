const boardsRepo = require('./board.memory.repository');
const { removeAllTasksByBoardId } = require('../tasks/task.memory.repository');

module.exports = {
  getAll: async (req: any, reply: any) => {
    const boards = await boardsRepo.getAllBoards();
    reply.send(boards);
  },

  getById: async (req: any, reply: any) => {
    try {
      const board = await boardsRepo.getBoardById(req.params.id);

      reply.send(board);
    } catch (err: any) {
      reply.code(404).send(err.message);
    }
  },

  create: async (req: any, reply: any) => {
    const board = await boardsRepo.createBoard(req.body);
    reply.code(201).send(board);
  },

  remove: async (req: any, reply: any) => {
    const message = await boardsRepo.removeBoard(req.params.id);
    await removeAllTasksByBoardId(req.params.id);
    return reply.send(message);
  },

  update: async (req: any, reply: any) => {
    const board = await boardsRepo.updateBoard(req.params.id, req.body);
    reply.send(board);
  },
};
