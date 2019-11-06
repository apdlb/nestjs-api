
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
    abstract createEntity(fields?: CreateEntityInput): Entity | Promise<Entity>;

    abstract updateEntity(id: string, fields?: CreateEntityInput): Entity | Promise<Entity>;

    abstract deleteEntity(id: string): string | Promise<string>;
}

export abstract class IQuery {
    abstract getEntities(): Entity[] | Promise<Entity[]>;

    abstract getEntitiesPaginated(filter: JSON): JSON | Promise<JSON>;

    abstract getEntity(id: string): Entity | Promise<Entity>;
}

export type JSON = any;
