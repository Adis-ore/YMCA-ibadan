import {v2 as cloudinary} from 'cloudinary'
import projectModel from '../models/projectModel.js';

//App project
const addProject = async (req,res) =>{
    try {
        const {name,description,about,targetAmount,amountRaised} =req.body 
        
                
                const imagefile = req.files.image[0]
                const images = [imagefile].filter((item) => item !== undefined);


                // to store to cloudinary
                const imageUrl = await  Promise.all(
                    images.map(async (item)=> {
                        let results = await  cloudinary.uploader.upload(item.path,{resource_type:'image'})
                        return results.secure_url
                    })
                )

        const projectData = {
            name,
            description,
            about,
            targetAmount:Number(targetAmount),
            amountRaised:Number(amountRaised),
            image:imageUrl,
            date:Date.now()
        }
        
        console.log(projectData);

        const project = new projectModel(projectData)
        await project.save()
        

    res.json({success:true, message:'Project added'})        


    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }

}

// fuction to list all project

const listProject = async (req,res) => {
    try {
        const projects = await projectModel.find({})
        res.json({success:true,projects})
    } catch (error) {
        console.log(error);
        res.json({success:false, message:error.message})
        
    }
}


// to remove
const removeProject = async (req, res) => {
    try {
        await projectModel.findByIdAndDelete(req.body.id);
        res.json({ success: true, message: "Project deleted successfully." });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};



export {addProject,listProject,removeProject}

