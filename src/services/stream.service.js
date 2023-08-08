import { StreamModel } from "../models/index.js"; 
import mongoose from "mongoose";

export const StreamService = { 
	addStream: async (body) => {  
		const newStream = new StreamModel(body);
		return await newStream.save();   
	},

    addUserToStream: async (streamId, userId) => {  
		return await StreamModel.findByIdAndUpdate({_id: streamId}, {$push: {"users": userId}}, {new: true,});
	},

	getAllStrams: async () => {
		return StreamModel.find();
	},

	streamById: async (id) => { 
		const data = await StreamModel.aggregate([
			{ $match: { _id: new mongoose.Types.ObjectId(id) } },
			{
			  $lookup: {
				from: "users",
				localField: "users",
				foreignField: "_id",
				as: "streamUsers",
			  },
			}
		]); 

		return data;
	},
};
 