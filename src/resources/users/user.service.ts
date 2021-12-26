import { FastifyReply } from 'fastify';
import { UserRequest } from '../../common/types';
import * as usersRepo from './user.memory.repository';

/**
 * GET: get all users
 *
 * @param req - http request
 * @param reply - fastify server reply
 */
export const getAll = async (
  req: UserRequest,
  reply: FastifyReply
): Promise<void> => {
  req.log.info({
    url: req.raw.url,
    method: req.method,
    statusCode: reply.raw.statusCode,
  });

  const users = await usersRepo.getAllUsers();

  reply.send(users);
};

/**
 * GET: get user by id

 * @param req - http request
 * @param reply - fastify server reply
 */
export const getById = async (
  req: UserRequest,
  reply: FastifyReply
): Promise<void> => {
  req.log.info({
    url: req.raw.url,
    id: req.params.id,
    method: req.method,
    statusCode: reply.raw.statusCode,
  });

  const user = await usersRepo.getUserById(req.params.id);

  reply.send(user);
};

/**
 * POST: create user
 *
 * @param req - http request
 * @param reply - fastify server reply
 */
export const create = async (
  req: UserRequest,
  reply: FastifyReply
): Promise<void> => {
  const user = await usersRepo.createUser(req.body);

  req.log.info({
    url: req.raw.url,
    method: req.method,
    statusCode: reply.raw.statusCode,
    body: user,
  });

  reply.code(201).send(user);
};

/**
 * DELETE: delete user
 *
 * @param req - http request
 * @param reply - fastify server reply
 */
export const remove = async (
  req: UserRequest,
  reply: FastifyReply
): Promise<void> => {
  req.log.info({
    url: req.raw.url,
    id: req.params.id,
    method: req.method,
    statusCode: reply.raw.statusCode,
  });

  const message = await usersRepo.removeUser(req.params.id);

  reply.code(200).send(message);
};

/**
 * PUT: update user
 *
 * @param req - http request
 * @param reply - fastify server reply
 */
export const update = async (
  req: UserRequest,
  reply: FastifyReply
): Promise<void> => {
  const updatedUser = await usersRepo.updateUser(req.params.id, req.body);

  req.log.info({
    url: req.raw.url,
    id: req.params.id,
    method: req.method,
    statusCode: reply.raw.statusCode,
    body: updatedUser,
  });

  reply.code(200).send(updatedUser);
};
