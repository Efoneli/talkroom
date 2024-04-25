import { Injectable } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message.dto';
import { UpdateMessageDto } from './dto/update-message.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Message } from './entities/message.entity';
import { EntityManager, Repository } from 'typeorm';

@Injectable()
export class MessagesService {
  constructor(
    @InjectRepository(Message)
    private readonly messagesRepository: Repository<Message>,
    private readonly entityManager: EntityManager,
  ) {}

  async create(createMessageDto: CreateMessageDto) {
    const message = new Message(createMessageDto);
    await this.entityManager.save(message);
  }

  async findMessagesByownerId(ownerId: number): Promise<Message[]> {
    return await this.messagesRepository.find({ where: { ownerId: ownerId } });
    // Ensure that 'roomId' is a valid property for filtering messages
  }

  findAll() {
    return this.messagesRepository.find();
  }

  findOne(id: number) {
    return this.messagesRepository.findOneBy({ id });
  }

  async update(id: number, updateMessageDto: UpdateMessageDto) {
    const message = await this.messagesRepository.findOneBy({ id });
    message.body = updateMessageDto.body ?? message.body;

    this.entityManager.save(message);

    return message;
  }

  async remove(id: number) {
    await this.messagesRepository.delete(id);
  }
}
