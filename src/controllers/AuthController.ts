import { FastifyRequest, FastifyReply } from 'fastify'
import prisma from '../services/prisma';
import bcrypt from 'bcrypt';

export async function login(
      request: FastifyRequest,
      reply: FastifyReply
) {
      try {
            const body: any = request.body;

            const user = await prisma.users.findFirst({
                  where: {
                        username: body.username
                  },
            })

            if (!user) {
                  return reply.status(401).send({ message: 'User not found' });
            }

            // compare password with user password 
            const match = await bcrypt.compare(body.password, user.password);
            if (!match) {
                  return reply.status(401).send({ message: 'Invalid credentials' });
            }
            // Generate token
            const token = await request.jwt.sign({ user });

            return reply.send({
                  message: 'login success', token, user: {
                        username: user.username,
                        id: user.id
                  }
            })
      } catch (e) {
            console.log(e)
            return reply.status(500).send({ message: 'Server error', e })
      }
}