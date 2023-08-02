import { UserModel } from "../models/index.js";
import { StreamModel } from "../models/index.js";

export const UserService = {
	userExist: async (email) => {
		return await UserModel.findOne({ email: email });
	},
	registerUser: async (body) => {
		const newUser = new UserModel(body);
		return await newUser.save(); 
	},
	getAll: async () => {
		return await UserModel.find();
	},

	userById: async (id) => {
		return await UserModel.findById(id);
	},

	getAllStreamByUserId: async (id) => {
		return await StreamModel.find({"users": id}); 
	},

	getStreamByUserId: async (userId, streamId) => {
		return await StreamModel.findOne({"users": userId, "_id": streamId}); 
	},

	removeUserFromStream: async (userId, streamId) => {
		return await StreamModel.findByIdAndUpdate({"_id": streamId}, {$pull:{"users": userId}}, {new: true});
	},

	updateUser: async (id, body) => {
		return await UserModel.findByIdAndUpdate({ _id: id }, body, {
			new: true
		  });
	},

	deleteUser: async (id) => {
		return await UserModel.findByIdAndDelete(id);
	},

};
 