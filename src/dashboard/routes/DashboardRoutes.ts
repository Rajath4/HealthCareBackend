// src/dashboard/routes/DashboardRoutes.ts

import { Router } from 'express';
import { DashboardController } from '../controller/DashboardController';
import { authMiddleware } from '../../auth';

const dashboardController = new DashboardController();
const dashboardRouter = Router();

/**
 * @route   GET /api/v1/auth/dashboard
 * @desc    Get dashboard data including upcoming appointments, health reminders, and health tips.
 * @access  Protected (Authenticated users)
 */
dashboardRouter.get(
  '/',
  authMiddleware, // Ensure the user is authenticated
  dashboardController.getDashboard
);

export default dashboardRouter;
