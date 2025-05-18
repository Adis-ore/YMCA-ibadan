import mongoose, { mongo, Schema } from "mongoose";

const mediaSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: Array, required: true },
});

const mediaModel = mongoose.models.media || mongoose.model("media", mediaSchema)

export default mediaModel