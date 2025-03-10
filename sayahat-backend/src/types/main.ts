import { HTTP_STATUS_CODES } from "#constants/constants";
import { Types } from "mongoose";

export interface User {
	username: string;
	nickname: string;
	email: string;
	password: string;
	roles: string[];
	routeIds: Types.ObjectId[];
}

export type StatusCode =
	(typeof HTTP_STATUS_CODES)[keyof typeof HTTP_STATUS_CODES];
