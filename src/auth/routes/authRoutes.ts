import { Router } from 'express';
import AuthController from '../controllers/authController';

const router = Router();

const authController = new AuthController();

router.get('/register', (req, res) => {
    authController.register(req, res);
});

router.get('/login', (req, res) => {
    authController.login(req, res);
});

router.get('/forgot-password', (req, res) => {
    authController.forgotPassword(req, res);
});

router.get('/reset-password', (req, res) => {
    authController.resetPassword(req, res);
});
export default router;
