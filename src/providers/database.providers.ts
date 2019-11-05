import * as mongoose from 'mongoose';

import { getMongooseUri } from '../config';
import CONSTANTS from '../utils/constants';

export const databaseProviders = [
  {
    provide: CONSTANTS.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(getMongooseUri(), {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
      }),
  },
];
