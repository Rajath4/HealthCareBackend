// src/appointment/appointment.controller.ts
import { Request, Response } from 'express';
import { AuthRequest } from '../../auth/middlewares/authMiddleware';
import { AppointmentService } from '../service/AppointmentService';

export class AppointmentController {
  private appointmentService: AppointmentService;

  constructor() {
    this.appointmentService = new AppointmentService();
  }

  // For Patients
  public createAppointmentForPatient = async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const { doctorId, date, time, reason, notes } = req.body;

      const appointment = await this.appointmentService.createAppointment({
        patientId: req.user?.userId,
        doctorId,
        date,
        time,
        reason,
        notes,
      });

      res.status(201).json(appointment);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  };

  public getAppointmentsForPatient = async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const filter: any = {
        patientId: req.user?.userId,
      };

      // Apply filters from query parameters
      if (req.query.status) {
        filter.status = req.query.status;
      }

      if (req.query.date) {
        filter.date = new Date(req.query.date as string);
      }

      const sortOptions = this.buildSortOptions(req);

      const appointments = await this.appointmentService.getAppointments(
        filter,
        sortOptions
      );
      res.status(200).json(appointments);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  };

  // For Doctors
  public getAppointmentsForDoctor = async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      const filter: any = {
        doctorId: req.user?.userId,
      };

      // Apply filters from query parameters
      if (req.query.status) {
        filter.status = req.query.status;
      }

      if (req.query.date) {
        filter.date = new Date(req.query.date as string);
      }

      const sortOptions = this.buildSortOptions(req);

      const appointments = await this.appointmentService.getAppointments(
        filter,
        sortOptions
      );
      res.status(200).json(appointments);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  };

  // Helper method to build sort options
  private buildSortOptions(req: Request) {
    const sortOptions: any = {};
    if (req.query.sortBy && req.query.order) {
      sortOptions[req.query.sortBy as string] =
        req.query.order === 'desc' ? -1 : 1;
    }
    return sortOptions;
  }
}
