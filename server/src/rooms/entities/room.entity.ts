import { AbstractEntity } from "src/database/abstract.module";
import { Column, CreateDateColumn, Entity } from "typeorm";


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

}

