import { FastifyReply } from 'fastify';
import { UserRequest } from '../../common/types';
import * as usersRepo from './user.memory.repository';

export const getAll = async (req: UserRequest, reply: FastifyReply): Promise<void> => {
  const users = await usersRepo.getAllUsers();

  reply.send(users);
}

export const getById = async (req: UserRequest, reply: FastifyReply): Promise<void> => {
  const user = await usersRepo.getUserById(req.params.id);

  reply.send(user);
}
export const create = async (req: UserRequest, reply: FastifyReply): Promise<void> => {
  const user = await usersRepo.createUser(req.body);

  reply.code(201).send(user);
}
export const remove = async (req: UserRequest, reply: FastifyReply): Promise<void> => {
  const message = await usersRepo.removeUser(req.params.id);

  reply.code(200).send(message);
}
export const update = async (req: UserRequest, reply: FastifyReply): Promise<void> => {
  const updatedUser = await usersRepo.updateUser(req.params.id, req.body);

  reply.code(200).send(updatedUser);
}
