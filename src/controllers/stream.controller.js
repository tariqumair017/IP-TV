import { StreamService } from "../services/index.js";
import { httpResponse } from "../utils/index.js"; 

export const StreamController = {
	addStream: async (req, res) => {
		try {
            const stream = await StreamService.addStream(req.body);  
            return httpResponse.CREATED(res, stream);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
    
    addUsertoStream: async (req, res) => {
		try {
            const stream = await StreamService.addUserToStream(req.params.id, req.user.id);  
            return httpResponse.SUCCESS(res, stream);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getAllStrams: async (req, res) => {
		try {
			const stream = await StreamService.getAllStrams();
			if (!stream) {
				return httpResponse.NOT_FOUND(res, null, "Streams not found");
			  }
            return httpResponse.SUCCESS(res, stream);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getStreamById: async (req, res) => {
		try {
			const stream = await StreamService.streamById(req.params.id);
			if(!stream) {
				return httpResponse.NOT_FOUND(res, null, "Stream not found");
			} 
			return httpResponse.SUCCESS(res, stream);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};
