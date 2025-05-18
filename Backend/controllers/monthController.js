import monthModel from "../models/monthModel.js";
import { v2 as cloudinary } from "cloudinary";


// Add months
const addMonth = async (req, res) => {
  try {
    const { heading, name, deeds } = req.body;

    const imagefile = req.files.image[0]

    // store to cloudinary
    const images = [imagefile].filter((item)=> item !== undefined);

    // the storage
    const imageUrl = await Promise.all(
        images.map(async (item)=>{
            let results = await cloudinary.uploader.upload(item.path,{
                resource_type: "image",
            })
            return results.secure_url
        })
    )

    const monthData = {
      heading,
      name,
      image:imageUrl,
      deeds,
      date: Date.now(),
    };

    const month = new monthModel(monthData);
    await month.save();
    res.json({ success: true, message: "Month  added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// List months
const listMonth = async (req, res) => {
  try {
    const month = await monthModel.find({});
    res.json({ success: true, month });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Delete month
const deleteMonth = async (req, res) => {
  try {
    await monthModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "month  deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addMonth, deleteMonth, listMonth };
