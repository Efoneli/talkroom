import { Chat } from "src/chats/entities/chat.entity";
import { AbstractEntity } from "src/database/abstract.module";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User extends AbstractEntity<User> {
   @Column()
   name: string


   @ManyToMany(() => Chat, chat => chat.users)
    @JoinTable()
    chats: Chat[]
}
