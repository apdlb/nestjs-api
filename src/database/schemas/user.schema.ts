import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema(
  {
    email: { type: String, required: true },
    password: { type: String, required: true },
    name: { type: String, required: true },
    surname: { type: String },
    role: { type: mongoose.Schema.Types.ObjectId, ref: 'Role' },
  },
  { collection: 'users' },
);
