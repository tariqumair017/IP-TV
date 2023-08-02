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
	getAllSeries: async (req, res) => {
		try {
			const data = await GenreService.getAllSeries();
			return httpResponse.SUCCESS(res, data.data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	getAllSeriesSeasons: async (req, res) => {
		try {
			const data = await GenreService.getAllSeriesSeasons();
			return httpResponse.SUCCESS(res, data.data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},
	getAllSeriesSeasonsEpisodes: async (req, res) => {
		try {
			const data = await GenreService.getAllSeriesSeasonsEpisodes();
			return httpResponse.SUCCESS(res, data.data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getById: async (req, res) => {
		try {
			const data = await GenreService.getById(req.params.id);
			return httpResponse.SUCCESS(res, data.data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getByIdSeries: async (req, res) => {
		try {
			const data = await GenreService.getByIdSeries(req.params.id);
			return httpResponse.SUCCESS(res, data.data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getByIdSeriesSeasons: async (req, res) => {
		try {
			const data = await GenreService.getByIdSeriesSeasons(req.params.id);
			return httpResponse.SUCCESS(res, data.data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	getByIdSeriesSeasonsEpisodes: async (req, res) => {
		try {
			const data = await GenreService.getByIdSeriesSeasonsEpisodes(req.params.id);
			return httpResponse.SUCCESS(res, data.data);
		} catch (error) {
			return httpResponse.INTERNAL_SERVER_ERROR(res, error);
		}
	},

	patch: async (req, res) => {
		req.body.id = req.params.id;
		const addResponse = await GenreService.patch(req.body);
		if (addResponse.message === "success") {
			return httpResponse.CREATED(res, addResponse.data);
		} else if (addResponse.message === "failed") {
			return httpResponse.CONFLICT(res, addResponse.data);
		} else {
			return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
		}
	},

	delete: async (req, res) => {
		const addResponse = await GenreService.delete(req.params.id);
		if (addResponse.message === "success") {
			return httpResponse.CREATED(res, addResponse.data);
		} else if (addResponse.message === "failed") {
			return httpResponse.CONFLICT(res, addResponse.data);
		} else {
			return httpResponse.INTERNAL_SERVER_ERROR(res, addResponse.data);
		}
	},
};
