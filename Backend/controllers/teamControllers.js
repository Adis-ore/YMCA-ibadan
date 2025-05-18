import { v2 as cloudinary } from "cloudinary";
import teamModel from "../models/teamModel.js";
// Add team

const addTeam = async (req, res) => {
  try {
    const { name, role, about, contact, email } = req.body;

    const imagefile = req.files.image[0];

    //to store image in cloudinary
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

    const teamData = {
      name,
      role,
      about,
      contact: Number(contact),
      image: imageUrl,
      email,
      date: Date.now(),
    };

    console.log(teamData);

    const team = new teamModel(teamData);
    await team.save();

    res.json({ success: true, message: "team data added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// To list Team
const listTeam = async (req, res) => {
  try {
    const team = await teamModel.find({});
    res.json({ success: true, team });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// To remove Team
const removeTeam = async (req, res) => {
    try {
        await teamModel.findByIdAndDelete(req.body.id)
        res.json({success:true, message:'Team data deleted successfully'})
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message });
    }
};

export { addTeam, listTeam, removeTeam };
