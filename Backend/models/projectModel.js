import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
    name:{type:String, required: true},
    description:{type: String, required: true},
    image:{type: Array, required:true},
    about:{type:String, },
    targetAmount:{type:Number, required:true},
    amountRaised:{type:Number, required:true},
    date:{type:Number, required:true}
})

const projectModel = mongoose.models.project || mongoose.model("project",projectSchema) 



export default projectModel