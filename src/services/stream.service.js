import { StreamModel } from "../models/index.js"; 

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
		return StreamModel.findById(id);
	},
};
 