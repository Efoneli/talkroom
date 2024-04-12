import { PrimaryGeneratedColumn } from "typeorm";

export class CreateRoomDto {
    roomId?: number;
    name: string;
}
