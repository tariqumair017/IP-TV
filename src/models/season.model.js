import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  episodes: { type: Schema.Types.ObjectId, required: true, ref: 'Episode' },
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String },
});
export const SeasonModel = mongoose.model("Season", schema);