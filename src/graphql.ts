
/** ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
export class CreateEntityInput {
    field1?: string;
    field2?: number;
    field3?: boolean;
}

export class Entity {
    _id?: string;
    field1?: string;
    field2?: number;
    field3?: boolean;
}

export abstract class IMutation {
    abstract createEntity(createEntityInput?: CreateEntityInput): Entity | Promise<Entity>;

    abstract updateEntity(id: string, createEntityInput?: CreateEntityInput): Entity | Promise<Entity>;

    abstract deleteEntity(id: string): Entity | Promise<Entity>;
}

export abstract class IQuery {
    abstract getEntities(first?: number, offset?: number): Entity[] | Promise<Entity[]>;

    abstract getEntity(id: string): Entity | Promise<Entity>;
}
