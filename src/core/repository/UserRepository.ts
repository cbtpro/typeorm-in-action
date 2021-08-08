import { EntityManager, EntityRepository } from 'typeorm'
import { User } from '../entity/User';
import BaseRepository from './BaseRepository';

@EntityRepository(User)
export class UserRepository extends BaseRepository<User> {
  constructor() {
    super()
  }

  createAndSave(firstName: string, lastName: string) {
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    return this.manager.save(user);
  }

  findByName(firstName: string, lastName: string) {
    return this.manager.findAndCount(User, { firstName, lastName });
  }

  deleteById(id: number) {
    const user = new User()
    user.id = id
    return this.manager.remove(user)
  }
}
