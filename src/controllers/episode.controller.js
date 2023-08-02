import { EpisodeService } from "../services/index.js";
import { httpResponse } from "../utils/index.js"; 

export const EpisodeController = {
    add: async (req, res) => {
        try {
            // const episodeExist = await EpisodeService.episodeExist(req.body); 
            // if(genreExist) {
            //     return httpResponse.CONFLICT(res, null, "Genre already exist");
            // }
            const addEpisode = await EpisodeService.addEpisode(req.body); 
            return httpResponse.CREATED(res, addEpisode);
        } catch (error) {
            return httpResponse.INTERNAL_SERVER_ERROR(res, error);
        }
	},

	getAll: async (req, res) => {
		try {
			const data = await EpisodeService.getAllEpisodes();
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

    getEpisodeById: async (req, res) => {
		try {
			const data = await EpisodeService.getById(req.params.id);
			return httpResponse.SUCCESS(res, data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
};
