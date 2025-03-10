import { UserModel } from "../../models/user.model";
import {
	generateAccessToken,
	generateRefreshToken,
} from "../../utils/generateTokens";

import bcrypt from "bcryptjs";
import { verifyToken } from "../../utils/verifyToken";

export class AuthService {
	async signup(username: string, password: string, email: string) {
		const candidate = await UserModel.findOne({ username }).lean();
		if (candidate) {
			throw new Error("User already exists");
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
			throw new Error("Wrong password or login");
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
