import { ACCESS_TOKEN_SECRET, REFRESH_TOKEN_SECRET } from "#config/config";

import jwt, { JwtPayload } from "jsonwebtoken";

interface TokenPayload extends JwtPayload {
	userId: string;
}

const verifyToken = (
	token: string,
	type: "refresh" | "access"
): TokenPayload => {
	const SECRET = type == "refresh" ? REFRESH_TOKEN_SECRET : ACCESS_TOKEN_SECRET;

	return jwt.verify(token, SECRET) as TokenPayload;
};

export { verifyToken };
