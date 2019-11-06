import * as mongoose from 'mongoose';

import { getMongooseUri } from '../config';
import Role from '../database/models/role.model';
import User from '../database/models/user.model';
import roles from '../database/seeds/roles';
import users from '../database/seeds/users';
import CONSTANTS from '../utils/constants';

export const databaseProviders = [
  {
    provide: CONSTANTS.DATABASE_CONNECTION,
    useFactory: (): Promise<typeof mongoose> =>
      mongoose.connect(
        getMongooseUri(),
        {
          useNewUrlParser: true,
          useFindAndModify: false,
          useUnifiedTopology: true,
        },
        err => {
          if (err) {
            console.log('Unable to connect to database:' + err);
            process.exit(1);
          }
          console.log('Connected to database.');

          buildRoles().then(() => {
            initialData();
          });
        },
      ),
  },
];

const buildRoles = async () => {
  return Role.findOne({}, (err, doc) => {
    if (!doc) {
      for (const role of roles) {
        const mRole = new Role(role);
        mRole.save();
      }
    }
  });
};

const initialData = async () => {
  return User.findOne({}, async (err, doc) => {
    if (!doc) {
      for (const user of users) {
        if (user.role && user.role.name) {
          const mRole = await Role.findOne({ name: user.role.name });
          user.role = mRole;
        }
        const mUser = new User(user);
        mUser.save();
      }
    }
  });
};
