import { Module } from '@nestjs/common';
import { RoomsService } from './rooms.service';
import { RoomsController } from './rooms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './entities/room.entity';
import { Message } from 'src/messages/entities/message.entity';
import { MessagesService } from 'src/messages/messages.service';

@Module({
  imports: [TypeOrmModule.forFeature([Room, Message])],
  controllers: [RoomsController],
  providers: [RoomsService, MessagesService],
})
export class RoomsModule {}
