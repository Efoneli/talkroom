import { Injectable } from '@nestjs/common';
import { CreateChatDto } from './dto/create-chat.dto';
import { UpdateChatDto } from './dto/update-chat.dto';
import { Chat } from './entities/chat.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class ChatsService {
  constructor(
    @InjectRepository(Chat)
    private readonly chatsRepository: Repository<Chat>,
    private readonly entityManager: EntityManager,

  ){}

  async create(createChatDto: CreateChatDto) {
    const user = new Chat(createChatDto)
    await this.entityManager.save(user)
  }

  findAll() {
    return this.chatsRepository.find()
  }

  findOne(id: number) {
    return this.chatsRepository.findOneBy({id})
  }

  async update(id: number, updateChatDto: UpdateChatDto) {
    const chat = await this.chatsRepository.findOneBy({id})
    chat.name = updateChatDto.name ?? chat.name
    this.entityManager.save(chat)

    return chat
  }

  async remove(id: number) {
    await this.chatsRepository.delete(id)
  }
}
