import { IAppointment } from "../model/AppointmentModel";
import { AppointmentRepository } from "../respository/AppointmentRepository";

export class AppointmentService {
  private appointmentRepository: AppointmentRepository;

  constructor() {
    this.appointmentRepository = new AppointmentRepository();
  }

  async createAppointment(appointmentData: Partial<IAppointment>) {
    // Additional business logic can be added here
    return this.appointmentRepository.create(appointmentData);
  }

  async getAppointments(filter: any, sortOptions: any) {
    return this.appointmentRepository.find(filter, sortOptions);
  }

  // Additional methods like updateAppointmentStatus, etc.
}
