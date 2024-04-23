import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,

  ){}

  async create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto)
    await this.entityManager.save(user)
  }

  findAll() {
    return this.usersRepository.find()
  }

  findByName(name: string) {
    return this.usersRepository.findByName(name)
  }

  findOne(id: number) {
    return this.usersRepository.findOneBy({id})
  }

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOneBy({id})
    user.name = updateUserDto.name ?? user.name
    this.entityManager.save(user)

    return user
  }

  async remove(id: number) {
    await this.usersRepository.delete(id)
  }
}
