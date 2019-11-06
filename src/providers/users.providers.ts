import User from '../database/models/user.model';
import CONSTANTS from '../utils/constants';

export const usersProviders = [
  {
    provide: CONSTANTS.MODEL_USER,
    useFactory: () => User,
    inject: [CONSTANTS.DATABASE_CONNECTION],
  },
];
