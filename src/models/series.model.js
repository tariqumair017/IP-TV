import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({ 
  seasons: { type: Schema.Types.ObjectId, required: true, ref: 'Season' },
  name: { type: String, required: true, maxlength: 50 },
  description: { type: String },
//   trailer: { type: String, required: true, maxlength: 50 },
});
export const SeriesModel = mongoose.model("Series", schema);