import express, { Router } from "express";
import { AuthController } from "./auth.controller";
import { validate } from "../../middlewares/validate";
import { userSchema } from "../user/user.schema";

const authRouter: Router = express.Router();
const authController = new AuthController();

authRouter.post("/signup", validate(userSchema), authController.signup);
authRouter.post("/login", authController.login);
authRouter.post("/refresh", authController.refresh);

export { authRouter };
