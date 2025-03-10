import { User } from "#types/main";
import { model, Schema, Types } from "mongoose";

const userSchema = new Schema<User>(
	{
		username: {
			type: String,
			required: true,
			unique: true,
		},
		nickname: {
			type: String,
			default: "",
		},
		email: {
			type: String,
			required: true,
			unique: true,
		},
		password: {
			type: String,
			required: true,
		},
		roles: {
			type: [String],
			default: ["user"],
		},
		routeIds: {
			type: [Types.ObjectId],
			default: [],
		},
	},
	{ timestamps: true }
);

export const UserModel = model<User>("User", userSchema);
