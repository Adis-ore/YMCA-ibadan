import mongoose  from "mongoose";

const newsSchema = new mongoose.Schema({
    newsContent:{type:String,required:true}
})


const newModel = mongoose.models.news || mongoose.model("news",newsSchema)


export default newModel