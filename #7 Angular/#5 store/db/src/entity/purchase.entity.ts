import {Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Purchase {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    price: number;
}
