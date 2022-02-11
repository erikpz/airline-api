import { ObjectId } from 'mongodb';

export interface User {
  _id: ObjectId;
  name: string;
  lastname: string;
  email: string;
  address: string;
}
