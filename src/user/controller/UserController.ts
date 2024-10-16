import { Response } from 'express';
import { AuthRequest } from '../../auth/middlewares/authMiddleware';
import { UserService } from '../services/UserService';

export class UserController {
  private userService: UserService;

  constructor() {
    this.userService = new UserService();
  }


  public getDoctors = async (
    req: AuthRequest,
    res: Response
  ) => {
    try {
      

      const doctors = await this.userService.getAllDoctors();
      res.status(200).json(doctors);
    } catch (error:any) {
      res.status(400).json({ error: error.message });
    }
  };
}
