import { FastifyRequest } from "fastify";
import { IUser } from "../resources/users/user.model";

export type UserRequest = FastifyRequest<{
  Params: { id: string },
  Body: IUser,
}>
