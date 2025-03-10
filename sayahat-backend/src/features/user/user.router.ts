import express from "express";
import { UserController } from "./user.controller";

const userRouter = express.Router();
const userController = new UserController();

userRouter
	.route("/:userId")
	.get(userController.getUserById)
	.put(userController.updateUserById)
	.delete(userController.deleteUserById);

userRouter.get("/users", userController.getUsersByAmount);

export { userRouter };
