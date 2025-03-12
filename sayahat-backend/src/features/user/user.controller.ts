import { NextFunction, Request, Response } from "express";
import { UserService } from "./user.service";

const userService = new UserService();

export class UserController {
	getUsersByAmount(req: Request, res: Response, next: NextFunction) {}

	async getUserById(req: Request, res: Response, next: NextFunction) {
		try {
			const user = await userService.getUserById(req.params.userId);

			res.send(user);
		} catch (e) {
			next(e);
		}
	}

	async updateUserById(req: Request, res: Response, next: NextFunction) {
		try {
			await userService.updateUserById("1", req.body);
		} catch (e) {
			next(e);
		}
	}
	deleteUserById(req: Request, res: Response, next: NextFunction) {}
}
