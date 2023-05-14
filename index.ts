import buildServer from "./src/server";
import config from "./src/config/app"
const server = buildServer();

server.listen({ port: config.PORT }).then(() => {
      console.log(`App is listening ${config.PORT}`)
}).catch(err => {
      server.log.error(err)
      process.exit(1)
})