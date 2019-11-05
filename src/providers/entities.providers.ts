import { Connection } from 'mongoose';

import { EntitySchema } from '../database/schemas/entity.schema';
import CONSTANTS from '../utils/constants';

export const entitiesProviders = [
  {
    provide: CONSTANTS.MODEL_ENTITY,
    useFactory: (connection: Connection) =>
      connection.model('Entity', EntitySchema),
    inject: [CONSTANTS.DATABASE_CONNECTION],
  },
];
