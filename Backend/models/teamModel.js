import mongoose, { Schema } from "mongoose";


const teamSchema =  new mongoose.Schema({
    name: { type: String, required:true},
    role: {type: String, required:true},
    image:{type: Array, required:true},
    about:{type:String, required:true},
    contact:{type:Number, required:true},
    email:{type:String, required:true, unique:true},
    date:{type:Number, required:true}
})


const teamModel = mongoose.models.team || mongoose.model("team",teamSchema)


export default teamModel