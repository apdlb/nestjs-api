import { Column, Entity as TyperOrmEntity, PrimaryGeneratedColumn } from 'typeorm';

@TyperOrmEntity() // Change by @Entity in real case
export class Entity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  field1: string;

  @Column()
  field2: number;

  @Column()
  field3: boolean;
}
