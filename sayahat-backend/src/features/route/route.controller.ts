import { NextFunction, Request, Response } from "express";
import { RouteService } from "./route.service";

const routeService = new RouteService();

export class RouteController {
	getSpecSize(size: number) {
		return (req: Request, res: Response, next: NextFunction) => {};
	}
}
