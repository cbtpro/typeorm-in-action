import "reflect-metadata";
import { createConnection } from 'typeorm';
import { createKoaServer } from 'routing-controllers'
import { UserController } from './core/controller/UserController'

const port = 3000

createConnection().then(async connection => {
  const app = createKoaServer({
    controllers: [UserController],
  })
  app.listen(port)
  console.log(app)
  console.log(`server running on port:${port}`)
}).catch(error => console.log(error));
