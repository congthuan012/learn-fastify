import fastify, { FastifyRequest, FastifyReply } from "fastify";
import config from "./config/app"
import cors from '@fastify/cors'
import jwt, { JWT } from '@fastify/jwt';

import CarsRoutes from "./routes/cars";
import AuthRoutes from "./routes/auth";

declare module "fastify" {
      interface FastifyRequest {
            jwt: JWT;
      }
      export interface FastifyInstance {
            authenticate: any;
      }
}

function buildServer() {

      const server = fastify({ logger: true });


      server.register(cors, {
            origin: (origin, cb) => {
                  if (!origin || origin.indexOf('http://localhost:3000') !== -1) {
                        //  Request from localhost will pass
                        cb(null, true)
                        return
                  }
                  // Generate an error on other origins, disabling access
                  cb(new Error("Not allowed"), false)
            }
      })


      server.register(jwt, {
            secret: config.APP_KEY
      })

      server
            .decorate('authenticate', async (request: FastifyRequest, reply: FastifyReply) => {
                  try {
                        await request.jwtVerify()
                  } catch (err) {
                        reply.send(err)
                  }
            })


      server.addHook("preHandler", (req, reply, next) => {
            req.jwt = server.jwt;
            return next();
      });

      // Declare a route
      server.get('/', async (request, reply) => {

            return { hello: 'world' }
      })

      server.register(AuthRoutes, { prefix: '/auth' })
      server.register(CarsRoutes, { prefix: '/cars' })

      return server;
}

export default buildServer;
