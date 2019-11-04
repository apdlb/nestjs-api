import * as mongoose from 'mongoose';

export const EntitySchema = new mongoose.Schema({
  field1: { type: String, required: true },
  field2: { type: Number, required: false },
  field3: { type: Boolean, required: false },
});
