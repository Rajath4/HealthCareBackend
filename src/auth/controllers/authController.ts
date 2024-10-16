import { Request, Response } from 'express';
import { validationResult } from 'express-validator';
import AuthService from '../services/authService';

export default class AuthController {
   async register(req: Request, res: Response) {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const result = await AuthService.register(req.body);
      res.status(201).json(result);
    } catch (error:any) {
      res.status(500).json({ message: error.message });
    }
  }

   async login(req: Request, res: Response) {
    // Validate input
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const result = await AuthService.login(req.body);
      res.status(200).json(result);
    } catch (error:any) {
      res.status(401).json({ message: error.message });
    }
  }

   async forgotPassword(req: Request, res: Response) {
    // TODO: Implement this method
  }

   async resetPassword(req: Request, res: Response) {
    // TODO: Implement this method
  }
}
