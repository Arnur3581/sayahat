import { ApiError } from "#errors/ApiError";
import { verifyToken } from "#utils/verifyToken";
import { NextFunction, Request, Response } from "express";

const checkAuth = (req: Request, res: Response, next: NextFunction) => {
	try {
		const payload = verifyToken(req.body["Authorization"], "access");

		if (!payload) throw new Error();

		req.body.userId = payload.userId;

		next();
	} catch (e) {
		res.status(401).send();
	}
};

export { checkAuth };
