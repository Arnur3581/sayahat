import { NextFunction, Request, Response } from "express";

const errorHandler = (
	err: unknown,
	req: Request,
	res: Response,
	next: NextFunction
) => {
	res.status(500).send(`You stupid ass nigga: ${err}`);
};

export { errorHandler };
