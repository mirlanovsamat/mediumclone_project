import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'Tags'})
export class TagEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
}