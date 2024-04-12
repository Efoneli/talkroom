import { AbstractEntity } from 'src/database/abstract.module';
import { Message } from 'src/messages/entities/message.entity';
import { User } from 'src/users/entities/user.entity';
import { Column, CreateDateColumn, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Chat extends AbstractEntity<Chat>{

@CreateDateColumn({
    type: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
})
    public createdAt: Date;

  @Column()
  name: string;

  @Column()
  author: string;

  @ManyToMany(() => User, user => user.chats)
    users: User[];

    @OneToMany(() => Message, (message) => message.chat)
  messages: Message[];
}
