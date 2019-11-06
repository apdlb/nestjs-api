import * as mongoose from 'mongoose';
import * as mongoosePaginate from 'mongoose-paginate-v2';

const entitySchema = new mongoose.Schema(
  {
    field1: { type: String, required: true },
    field2: { type: Number, required: false },
    field3: { type: Boolean, required: false },
  },
  { collection: 'entities' },
);

entitySchema.plugin(mongoosePaginate);

const Entity = mongoose.model('Entity', entitySchema);

export default Entity;
