import mongoose from "mongoose";
const Schema = mongoose.Schema;
const schema = Schema(
    {
    streams: { type: Schema.Types.ObjectId, required: true, ref: 'Stream' },
    name: { type: String, required: true, maxlength: 50 },
    description: { type: String },
   },
   { timestamps: true }
);
export const EpisodeModel = mongoose.model("Episode", schema);