import { Appointment } from "../../appointment/model/AppointmentModel";

export class DashboardRepository {
  /**
   * Fetch the next two upcoming appointments for a user.
   * @param userId - The ID of the authenticated user.
   * @returns An array of upcoming appointments.
   */
  async getUpcomingAppointments(userId: string): Promise<any[]> {
    // Assuming appointments are for patients; adjust if needed
    return Appointment.find({ patientId: userId, date: { $gte: new Date() } })
      .sort({ date: 1, time: 1 })
      .limit(2)
      .populate('doctorId', 'name') // Populate doctor's name
      .exec();
  }
}
