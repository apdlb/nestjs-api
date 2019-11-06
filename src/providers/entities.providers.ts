import Entity from '../database/models/entity.model';
import CONSTANTS from '../utils/constants';

export const entitiesProviders = [
  {
    provide: CONSTANTS.MODEL_ENTITY,
    useFactory: () => Entity,
    inject: [CONSTANTS.DATABASE_CONNECTION],
  },
];
