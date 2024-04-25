import { AbstractEntity } from 'src/database/abstract.module';
import { Message } from 'src/messages/entities/message.entity';
import { Column, CreateDateColumn, Entity, OneToMany } from 'typeorm';

@Entity()
export class Room extends AbstractEntity<Room> {
  @CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @Column()
  id: number;

  @Column()
  name: string;

  @OneToMany(() => Message, (message) => message.room, { onDelete: 'CASCADE' })
  messages: Message[];
}
