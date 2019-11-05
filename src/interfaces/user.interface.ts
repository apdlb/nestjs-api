import { Document } from 'mongoose';

export interface User {
  email: string;
  password: string;
  name: string;
  surname?: string;
  role: string;
}
