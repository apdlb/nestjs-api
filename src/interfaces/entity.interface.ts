import { Document } from 'mongoose';

export interface Entity extends Document {
  _id: string;
  field1: string;
  field2?: number;
  field3?: boolean;
}
