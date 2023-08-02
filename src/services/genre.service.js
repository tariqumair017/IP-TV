import { GenreModel } from "../models/index.js";
import { GenreSeriesModel } from "../models/index.js";

export const GenreService = {
    exist: async (name) => { 
		return await GenreModel.findOne({name: name});  
	},
    add: async (body) => { 
		const newGenre = await GenreModel.create(body); 
        const gsNew = new GenreSeriesModel();
        await gsNew.genres.push(newGenre);
        await gsNew.save();
        return newGenre;
	},
	getAll: async () => { 
		return await GenreModel.find(); 
	},

	getAllSeries: async () => {
		try {
			const data = await GenreModel.aggregate([
				{
					$lookup: {
						localField: "_id",
						from: "series",
						foreignField: "genre_id",
						as: "series",
					},
				},
			]);

			return { message: "success", data };
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

	getAllSeriesSeasons: async () => {
		try {
			const data = await GenreModel.aggregate([
				{
					$lookup: {
						localField: "_id",
						from: "series",
						foreignField: "genre_id",
						as: "series",
						pipeline: [
							{
								$lookup: {
									localField: "_id",
									from: "seasons",
									foreignField: "series_id",
									as: "seasons",
								},
							},
						],
					},
				},
			]);

			return { message: "success", data };
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

	getAllSeriesSeasonsEpisodes: async () => {
		try {
			const data = await GenreModel.aggregate([
				{
					$lookup: {
						localField: "_id",
						from: "series",
						foreignField: "genre_id",
						as: "series",
						pipeline: [
							{
								$lookup: {
									localField: "_id",
									from: "seasons",
									foreignField: "series_id",
									as: "seasons",
									pipeline: [
										{
											$lookup: {
												localField: "_id",
												from: "episodes",
												foreignField: "season_id",
												as: "episodes",
											},
										},
									],
								},
							},
						],
					},
				},
			]);

			return { message: "success", data };
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

	getById: async (id) => {
		try {
			const data = await GenreModel.findById(id);

			return { message: "success", data };
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

	getByIdSeries: async (id) => {
		try {
			const data = await GenreModel.aggregate([
				{ $match: { _id: ObjectId(id) } },
				{
					$lookup: {
						localField: "_id",
						from: "series",
						foreignField: "genre_id",
						as: "series",
					},
				},
			]);

			return { message: "success", data };
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

	getByIdSeriesSeasons: async (id) => {
		try {
			const data = await GenreModel.aggregate([
				{ $match: { _id: ObjectId(id) } },
				{
					$lookup: {
						localField: "_id",
						from: "series",
						foreignField: "genre_id",
						as: "series",
						pipeline: [
							{
								$lookup: {
									localField: "_id",
									from: "seasons",
									foreignField: "series_id",
									as: "seasons",
								},
							},
						],
					},
				},
			]);

			return { message: "success", data };
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

	getByIdSeriesSeasonsEpisodes: async (id) => {
		try {
			const data = await GenreModel.aggregate([
				{ $match: { _id: ObjectId(id) } },
				{
					$lookup: {
						localField: "_id",
						from: "series",
						foreignField: "genre_id",
						as: "series",
						pipeline: [
							{
								$lookup: {
									localField: "_id",
									from: "seasons",
									foreignField: "series_id",
									as: "seasons",
									pipeline: [
										{
											$lookup: {
												localField: "_id",
												from: "episodes",
												foreignField: "season_id",
												as: "episodes",
											},
										},
									],
								},
							},
						],
					},
				},
			]);

			return { message: "success", data };
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

	patch: async ({ id, ...body }) => {
		try {
			const savedData = await GenreModel.findByIdAndUpdate(id, body);
			if (savedData) {
				return { message: "success", data: savedData };
			}
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},
	delete: async (id) => {
		try {
			const savedData = await GenreModel.findByIdAndDelete(id);
			if (savedData) {
				return { message: "success", data: savedData };
			}
		} catch (error) {
			return { message: "error", data: error.message };
		}
	},

};
 