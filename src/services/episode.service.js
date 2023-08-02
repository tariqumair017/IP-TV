import { EpisodeModel } from "../models/index.js";
import { StreamModel } from "../models/index.js";

export const EpisodeService = { 
	addEpisode: async (body) => { 
        // const user = await UserModel.findById(id);
		const newEpisode = new EpisodeModel(body);
		await newEpisode.save(); 
        // await user.streams.push(newEpisode);
        // await user.save();
        return newEpisode;
	},
	getAllEpisodes: async () => {
		return EpisodeModel.find();
	},

	getById: async (id) => {
		return EpisodeModel.findById(id);
	},
};
 