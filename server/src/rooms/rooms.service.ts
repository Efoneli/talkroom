import { Injectable } from '@nestjs/common';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomsRepository: Repository<Room>,
    private readonly entityManager: EntityManager,

  ){}
  async create(createRoomDto: CreateRoomDto) {
    const user = new Room(createRoomDto)
    await this.entityManager.save(user)
  }

  findAll() {
    return this.roomsRepository.find()
  }

  findOne(id: number) {
    return this.roomsRepository.findOneBy({id})
  }

  async update(id: number, updateRoomDto: UpdateRoomDto) {
    const room = await this.roomsRepository.findOneBy({id})
    room.name = updateRoomDto.name ?? room.name;
    
    this.entityManager.save(room)

    return room
  }

  async remove(id: number) {
    await this.roomsRepository.delete(id)
  }
}



