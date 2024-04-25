import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './user.repository'; // Import UserRepository
import { User } from './entities/user.entity';
import { EntityManager, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';


@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const user = new User(createUserDto);
    await this.usersRepository.save(user);
  }

  findAll() {
    return this.usersRepository.find();
  }

  async findByName(name: string) {
    return this.usersRepository.find({ where: { name} });
  }

  async findOne(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    return user;
  }
  

  async update(id: number, updateUserDto: UpdateUserDto) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    user.name = updateUserDto.name ?? user.name;
    return this.usersRepository.save(user);
  }
  

  async remove(id: number) {
    const user = await this.usersRepository.findOne({ where: { id } });
    if (!user) {
      throw new Error('User not found');
    }
    return this.usersRepository.remove(user);
  }
  
}
