import programModel from "../models/programModel.js";
import { v2 as cloudinary } from "cloudinary";

// Add program

const addProgram = async (req, res) => {
    try {

        const { name, description } = req.body;
        const imagefile = req.files.image[0];
        const images = [imagefile].filter((item) => item !== undefined);
        // to store to cloudinary
        const imageUrl = await Promise.all(
            images.map(async (item) => {
                let results = await cloudinary.uploader.upload(item.path, {
                    resource_type: "image",
                });
                return results.secure_url;
            })
        );

        const programData = {
            name,
            description,
            image: imageUrl,
            date: Date.now(),
        };

        const program = new programModel(programData);
        await program.save();

        res.json({ success: true, message: "Program added" });

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        
    }
}




// List all programs

const listProgram = async (req, res) => {
    try {
        const programs = await programModel.find({});
        res.json({ success: true, programs });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        
    }
}





// Delete program


const removeProgram = async (req, res) => {
    try {
        await programModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Program deleted" });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
        
    }
}




export { addProgram, listProgram, removeProgram };