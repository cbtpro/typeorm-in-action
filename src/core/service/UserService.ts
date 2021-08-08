import UserRepository from '../repository/UserRepository'

export default class UserService {
  constructor(private userRepository: UserRepository) {}

  async save (user) {
    const newUser = this.userRepository.save(user)
    return newUser
  }
  async find() {
    const photos = await this.userRepository.find();
    return photos
  }
}