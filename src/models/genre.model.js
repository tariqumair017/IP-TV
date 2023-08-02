import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema({
  name: { type: String, required: true, maxlength: 50 }, 
});
export const GenreModel = mongoose.model("Genre", schema);