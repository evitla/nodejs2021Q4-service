import { FastifyRequest } from 'fastify';
import { IBoard } from '../resources/boards/board.model';
import { ITask } from '../resources/tasks/task.model';
import { IUser } from '../resources/users/user.model';

export type UserRequest = FastifyRequest<{
  Params: { id: string };
  Body: IUser;
}>;

export type BoardRequest = FastifyRequest<{
  Params: { id: string };
  Body: IBoard;
}>;

export type TaskRequest = FastifyRequest<{
  Params: {
    id: string;
    boardId: string;
  };
  Body: ITask;
}>;
