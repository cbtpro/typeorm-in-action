import {
  JsonController,
  Param,
  Body,
  Get,
  Post,
  Put,
  Delete,
  QueryParam,
} from 'routing-controllers'
import { getCustomRepository } from "typeorm";
import { UserRepository } from '../repository/UserRepository'
import { User } from '../entity/User'

@JsonController()
export class UserController {

  /**
   * http://localhost:3000/users
   * @returns 
   */
  @Get('/users')
  async getAll() {
    const userRepository = getCustomRepository(UserRepository)
    const users = await userRepository.find()
    return users
  }
  /**
   * http://localhost:3000/user/1
   * @param id 
   * @returns 
   */
  @Get('/user/:id')
  async get(@Param('id') id: number) {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByIds([id])
    return user
  }
  /**
   * http://localhost:3000/user?firstName=Timber&lastName=Saw
   * @param firstName 
   * @param lastName 
   * @returns 
   */
  @Get('/user')
  async findByName(@QueryParam('firstName') firstName: string = undefined, @QueryParam('lastName') lastName: string = undefined) {
    const userRepository = getCustomRepository(UserRepository)
    const user = await userRepository.findByName(firstName, lastName);
    return user
  }
  @Delete('/user/:id')
  async deleteById(@Param('id') id: number = undefined) {
    const userRepository = getCustomRepository(UserRepository)
    let user = new User()
    user.id = id
    const effect = await userRepository.delete(user)
    return effect
  }
  @Delete('/user/:id')
  async deleteByUser(@Param('id') id: number = undefined) {
    const userRepository = getCustomRepository(UserRepository)
    const user = new User()
    user.id = id
    const effect = await userRepository.delete(user)
    return effect
  }
  @Post('/user')
  @Put('/user')
  async saveOrUpdate(@Body() user: User) {
    const userRepository = getCustomRepository(UserRepository)
    const newUser = await userRepository.save(user)
    return newUser
  }
}
