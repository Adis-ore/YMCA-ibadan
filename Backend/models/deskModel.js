import mongoose, { Schema } from "mongoose";

const deskSchema = new mongoose.Schema({
  name: { type: String, required: true, unique:true },
  image: { type:[String], required: true },
  description: { type: String, required: true },
});


const deskModel = mongoose.models.desk ||  mongoose.model("desk",deskSchema)

export default deskModel