import mongoose, { Document, Schema } from 'mongoose';

export interface IAppointment extends Document {
  patientId: mongoose.Types.ObjectId;
  doctorId: mongoose.Types.ObjectId;
  date: Date;
  time: string;
  reason: string;
  notes: string;
  status: 'Completed' | 'Pending';
}

const AppointmentSchema: Schema = new Schema({
  patientId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  doctorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  reason: { type: String },
  notes: { type: String },
  status: {
    type: String,
    enum: ['Completed', 'Pending'],
    default: 'Pending',
  },
});

export const Appointment = mongoose.model<IAppointment>(
  'Appointment',
  AppointmentSchema
);
