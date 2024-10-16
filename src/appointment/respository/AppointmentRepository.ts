import { IAppointment, Appointment } from "../model/AppointmentModel";

export class AppointmentRepository {
  async create(appointmentData: Partial<IAppointment>): Promise<IAppointment> {
    const appointment = new Appointment(appointmentData);
    return appointment.save();
  }

  async findById(id: string): Promise<IAppointment | null> {
    return Appointment.findById(id).exec();
  }

  async find(filter: any, sortOptions: any): Promise<IAppointment[]> {
    return Appointment.find(filter).sort(sortOptions)
    // .populate('doctorId', 'name')
    // .populate('patientId', 'name')
     .populate('doctorId', 'username')
    .populate('patientId', 'username')
    .exec();
  }

  // Additional methods like update, delete, etc.
}
