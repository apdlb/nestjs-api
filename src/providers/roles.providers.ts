import Role from '../database/models/role.model';
import CONSTANTS from '../utils/constants';

export const rolesProviders = [
  {
    provide: CONSTANTS.MODEL_ROLE,
    useFactory: () => Role,
    inject: [CONSTANTS.DATABASE_CONNECTION],
  },
];
