import deskModel from "../models/deskModel.js";
import { v2 as cloudinary } from "cloudinary";

// Add to Desk

const addDesk = async (req, res) => {
  try {
    const { name, description } = req.body;

    const imagefile = req.files.image[0]

    const images = [imagefile].filter((item) => item !== undefined);

    const imageUrl = await Promise.all(
      images.map(async (item) => {
        let results = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return results.secure_url;
      })
    );

    const deskData = {
      name,
      description,
      image: imageUrl,
      date:Date.now()
    };
    const desk = new deskModel(deskData);
    await desk.save();
    res.json({ success: true, message: "Desk  added" });
    // console.log(desk);
} catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// list Desk
const listDesk = async (req, res) => {
  try {
    const desk = await deskModel.find({})
    res.json({ success: true, desk });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Delete Desk
const deleteDesk = async (req, res) => {
    try {
      await deskModel.findByIdAndDelete(req.body.id)
      res.json({ success: true, message:'The desk has been deleted' });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addDesk, listDesk, deleteDesk };
