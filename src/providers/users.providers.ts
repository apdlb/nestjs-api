import { Connection } from 'mongoose';

import { UserSchema } from '../database/schemas/user.schema';
import CONSTANTS from '../utils/constants';

export const usersProviders = [
  {
    provide: CONSTANTS.MODEL_USER,
    useFactory: (connection: Connection) =>
      connection.model('User', UserSchema),
    inject: [CONSTANTS.DATABASE_CONNECTION],
  },
];
