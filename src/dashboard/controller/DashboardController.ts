
import { Response } from 'express';
import { DashboardService } from '../service/DashboardService';
import { AuthRequest } from '../../auth/middlewares/authMiddleware';

export class DashboardController {
  private dashboardService: DashboardService;

  constructor() {
    this.dashboardService = new DashboardService();
  }

  /**
   * Handler to get dashboard data for the authenticated user.
   * @param req - Authenticated request containing user info.
   * @param res - Express response.
   */
  public getDashboard = async (req: AuthRequest, res: Response): Promise<void> => {
    try {
      if (!req.user || !req.user.userId) {
        res.status(400).json({ error: 'Invalid user authentication data.' });
        return;
      }

      const dashboardData = await this.dashboardService.getDashboardData(req.user.id);

      res.status(200).json(dashboardData);
    } catch (error: any) {
      res.status(500).json({ error: 'Failed to fetch dashboard data.' });
    }
  };
}
