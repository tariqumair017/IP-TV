import mongoose from "mongoose";
const schema = mongoose.Schema(
	{ 
        time: { type: String, required: true, maxlength: 50 },
    },
	{ timestamps: true }
);
export const StreamModel = mongoose.model("Stream", schema);
