import { Router } from "express";
import { authMiddleware } from "../middlewares/authMiddleware";
import { roleMiddleware } from "../middlewares/roleMiddleware";

// const router = Router();

// router.get(
//   "/role_based_access",
//   authMiddleware,
//   roleMiddleware(["admin"]),
//   (req, res) => {
//     res.json({ message: "This is admin data." });
//   }
// );

// router.get("/user-data", authMiddleware, (req, res) => {
//   res.json({ message: "This is user data." });
// });

// export default router;
