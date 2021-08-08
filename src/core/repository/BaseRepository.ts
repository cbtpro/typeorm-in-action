// import 'reflect-metadata';
import { EntityManager, Repository, } from 'typeorm';

// export const createRepository = async <T extends EntityTarget<T>>(entity: T) => {
//   const connection = await createConnection()
//   let repository = connection.getRepository<T>(entity)
//   return repository
// }

// export default {
//   createRepository,
// }
export default class BaseRepository<T> extends Repository<T> {
}
