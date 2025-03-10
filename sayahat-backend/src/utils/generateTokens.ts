import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "#config/config";

import jwt from "jsonwebtoken";
import { Types } from "mongoose";

const generateAccessToken = (payload: {
	userId: string | Types.ObjectId;
}): string => {
	return jwt.sign(payload, ACCESS_TOKEN_SECRET, {
		expiresIn: "20m",
	});
};

const generateRefreshToken = (payload: {
	userId: string | Types.ObjectId;
}): string => {
	return jwt.sign(payload, REFRESH_TOKEN_SECRET, {
		expiresIn: "20d",
	});
};

export { generateAccessToken, generateRefreshToken };
