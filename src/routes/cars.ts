import { FastifyInstance } from 'fastify'
import { index, create, store } from '../controllers/CarController';
export default async function CarsRoutes(server: FastifyInstance) {
      server.get('/', {
            onRequest: [server.authenticate]
      }, index)
      server.get('/create', {
            onRequest: [server.authenticate]
      }, create)
      server.post('/store', {
            onRequest: [server.authenticate],
      }, store)
}