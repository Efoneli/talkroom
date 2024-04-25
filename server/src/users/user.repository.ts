import { Repository } from 'typeorm';
import { User } from './entities/user.entity';

export class UserRepository extends Repository<User> {
  async findByName(name: string): Promise<User | undefined> {
    return this.findOne({ where: { name } });
  }
}
