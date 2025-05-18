import mongoose from "mongoose";

const programSchema = new mongoose.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: Array, required: true },
    date: { type: Number, required: true }
})


const programModel = mongoose.models.program || mongoose.model("program", programSchema)


export default programModel