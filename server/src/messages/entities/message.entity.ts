import { AbstractEntity } from 'src/database/abstract.module';
import { Room } from 'src/rooms/entities/room.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
} from 'typeorm';

@Entity()
export class Message extends AbstractEntity<Message> {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Column()
  ownerId: number;

  @Column()
  body: string;

  @Column()
  roomId: number;

  @ManyToOne(() => Room, room => room.messages)
  @JoinColumn()
  room: Room;
}
