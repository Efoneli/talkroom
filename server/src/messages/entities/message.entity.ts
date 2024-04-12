import { Chat } from "src/chats/entities/chat.entity";
import { AbstractEntity } from "src/database/abstract.module";
import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne } from "typeorm";

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

    @ManyToOne(() => Chat, chat => chat.messages)
  @JoinColumn()
  chat: Chat;
}
