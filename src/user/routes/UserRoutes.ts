import { Router } from "express";
import { authMiddleware } from "../../auth";
import { UserController } from "../controller/UserController";

const userController = new UserController();

const userRouter = Router();

userRouter.get("/doctors", authMiddleware, userController.getDoctors );

export default userRouter;