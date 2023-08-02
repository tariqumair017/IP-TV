import { GenreService } from "../services/index.js";
import { httpResponse } from "../utils/index.js"; 

export const GenreController = {
    add: async (req, res) => {
        try {
            const genreExist = await GenreService.exist(req.body.name); 
            if(genreExist) {
                return httpResponse.CONFLICT(res, null, "Genre already exist");
            }
            const addgenre = await GenreService.add(req.body); 
            return httpResponse.CREATED(res, addgenre);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
	},

	getAll: async (req, res) => {
		try {
			const data = await GenreService.getAll();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};
