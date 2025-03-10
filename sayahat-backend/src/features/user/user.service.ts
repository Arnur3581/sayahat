import { UserModel } from "#models/user.model";
import { User } from "#types/main";

export class UserService {
	async getUserById(userId: string) {
		const user = await UserModel.findById(userId);

		if (!user) throw new Error("User isn't exist");

		return user;
	}

	async updateUserById(userId: string, updatedUser: Partial<User>) {
		const user = await UserModel.findByIdAndUpdate(userId, updatedUser);

		if (!user) throw new Error("User isn't exist");

		return true;
	}
}
