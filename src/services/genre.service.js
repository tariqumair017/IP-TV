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
};
 