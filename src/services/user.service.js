import { UserModel } from "../models/index.js";

export const UserService = {
	userExist: async (email) => {
		return UserModel.findOne({ email: email });
	},
	registerUser: async (body) => {
		const newUser = new UserModel(body);
		return await newUser.save(); 
	},
	getAll: async () => {
		return UserModel.find();
	},

	userById: async (id) => {
		return UserModel.findById(id);
	},

	updateUser: async (id, body) => {
		return await UserModel.findByIdAndUpdate({ _id: id }, body, {
			new: true,
		  });
	},

	deleteUser: async (id) => {
		return await UserModel.findByIdAndDelete(id);
	},

};
 