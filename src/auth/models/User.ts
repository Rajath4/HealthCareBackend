import { Schema, model, Document } from 'mongoose';

export interface IUser extends Document {
  username: string;
  name: string;
  email: string;
  password: string;
  role: string;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true, lowercase: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['client', 'doctor'], default: 'client' },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export default model<IUser>('User', userSchema);