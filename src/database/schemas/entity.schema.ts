import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

export const EntitySchema = new mongoose.Schema(
  {
    field1: { type: String, required: true },
    field2: { type: Number, required: false },
    field3: { type: Boolean, required: false },
  },
  { collection: 'entities' },
);

EntitySchema.plugin(mongoosePaginate);
