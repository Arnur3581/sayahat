import { ApiError } from "#errors/ApiError";
import { UserModel } from "#models/user.model";
import {
	generateAccessToken,
	generateRefreshToken,
} from "#utils/generateTokens";
import { verifyToken } from "#utils/verifyToken";

import bcrypt from "bcryptjs";

export class AuthService {
	async signup(username: string, password: string, email: string) {
		const candidate = await UserModel.findOne({
			$or: [{ username: username }, { email: email }],
		}).lean();

		if (candidate) {
			throw new ApiError(
				409,
				"This username is already in use or the email is already registered"
			);
		}

		const passwordHash = await bcrypt.hash(password, 12);
		const user = await UserModel.create({
			username,
			email,
			password: passwordHash,
		});

		const accessToken = generateAccessToken({ userId: user._id });
		const refreshToken = generateRefreshToken({ userId: user._id });

		return { accessToken, refreshToken };
	}

	async login(login: string, password: string) {
		const user = await UserModel.findOne({
			$or: [{ username: login }, { email: login }],
		}).lean();

		if (!user || !bcrypt.compareSync(password, user.password)) {
			throw new ApiError(400, "Wrong password or login");
		}

		const accessToken = generateAccessToken({ userId: user._id });
		const refreshToken = generateRefreshToken({ userId: user._id });

		return { accessToken, refreshToken };
	}

	async refresh(refreshToken: string) {
		const payload = verifyToken(refreshToken, "refresh");

		return generateAccessToken({ userId: payload.userId });
	}
}
