import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
		firstName: { type: String, required: true, maxlength: 50 },
		lastName: { type: String, required: true, maxlength: 50 },
		email: { type: String, unique: true, required: true },
		password: { type: String, required: true },
	},
	{ timestamps: true }
);
export const UserModel = mongoose.model("User", schema);
