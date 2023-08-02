import mongoose from "mongoose";
const schema = mongoose.Schema(
	{
        series: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Series' },
        episodes: { type: mongoose.Schema.Types.ObjectId, required: true, ref: 'Episode' },
        originalName: { type: String, required: true, maxlength: 50 },
        currentName: { type: String, required: true, maxlength: 50 },
        type: { type: String, required: true, maxlength: 50 },
        path: { type: String, required: true, maxlength: 50 },
        size: { type: String, required: true, maxlength: 50 },
    },
	{ timestamps: true }
);
export const FileModel = mongoose.model("File", schema);
