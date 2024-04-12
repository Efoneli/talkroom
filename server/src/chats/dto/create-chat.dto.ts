import { PrimaryGeneratedColumn } from "typeorm";

export class CreateChatDto {
    name: string;
    author: string;
}
