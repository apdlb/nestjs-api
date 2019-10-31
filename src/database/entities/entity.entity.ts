import { Column, Entity as TyperOrmEntity, PrimaryGeneratedColumn } from 'typeorm';

@TyperOrmEntity() // Change by @Entity in real case
export class Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nick: string;

  @Column()
  entity: string;
}
