import mongoose from "mongoose";
const schema = mongoose.Schema(
	{ 
        time: { type: String, required: true, maxlength: 50 },
		episode: { type: mongoose.Schema.Types.ObjectId, ref: 'Episode' },
		users: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }],
    },
	{ timestamps: true }
);
export const StreamModel = mongoose.model("Stream", schema);
