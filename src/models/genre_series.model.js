import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  genres: [{ type: Schema.Types.ObjectId, ref: 'Genre' }],
  series: [{ type: Schema.Types.ObjectId, ref: 'Series' }], 
});
export const GenreSeriesModel = mongoose.model("Genre-Series", schema);