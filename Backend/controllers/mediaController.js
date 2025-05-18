import mediaModel from "../models/mediaModel.js";
import {v2 as cloudinary} from "cloudinary";

// add media
const addMedia = async (req, res) => {
  try {
    const { title, description } = req.body;
    const imagefile = req.files.image[0];

    const images = [imagefile].filter((item) => item !== undefined);

    const imageUrl = await Promise.all(
      images.map(async (item) => {
        let results = await cloudinary.uploader.upload(item.path, {
          resource_type: "image",
        });
        return results.secure_url;
      })
    );

    const medaiData = {
      title,
      description,
      image: imageUrl,
      date: Date.now(),
    };

    const media = new mediaModel(medaiData);
    await media.save();

    res.json({ success: true, message: "media Added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const listMedia = async (req, res) => {
  try {
    const media = await mediaModel.find({});
    res.json({ success: true, media });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

const deleteMedia = async (req, res) => {
  try {
    await mediaModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "month  deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addMedia, listMedia, deleteMedia };
