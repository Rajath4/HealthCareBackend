import { Router } from "express";
import { authMiddleware, roleMiddleware } from "../../auth";
import { AppointmentController } from "../controller/AppointmentController";


const appointmentController = new AppointmentController();
const appointmentRouter = Router();

// Patient Routes
appointmentRouter.post(
  '/client/',
  authMiddleware,
  roleMiddleware(['client']),
  appointmentController.createAppointmentForPatient
);

appointmentRouter.get(
  '/client/',
  authMiddleware,
  roleMiddleware(['client']),
  appointmentController.getAppointmentsForPatient
);

// Doctor Routes
appointmentRouter.get(
  '/doctors/',
  authMiddleware,
  roleMiddleware(['doctor']),
  appointmentController.getAppointmentsForDoctor
);


export default appointmentRouter;
