import mongoose, { Schema } from "mongoose";

const monthSchema = new mongoose.Schema({
  heading: { type: String, required: true },
  name: { type: String, required: true },
  image: { type: Array, required: true },
  deeds: { type: String, required: true },
});

const monthModel =
  mongoose.models.month || mongoose.model("month", monthSchema);

export default monthModel;
