import { FastifyInstance, FastifyRequest, FastifyReply } from 'fastify'
import { login } from '../controllers/AuthController';
export default async function AuthRoutes(server: FastifyInstance) {
      server.post('/login', login)
}