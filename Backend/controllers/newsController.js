import newModel from "../models/newsModel.js";
// import

// Add newsContent
const addNews = async (req, res) => {
  try {
    const { newsContent } = req.body;

    const newsData = {
      newsContent,
      date: Date.now(),
    };
    const news = new newModel(newsData);
    await news.save();
    res.json({ success: true, message: "news  added" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// List News
const listNews = async (req, res) => {
  try {
    const news = await newModel.find({});
    res.json({ success: true, news });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Delete News

const deleteNews = async (req, res) => {
  try {
    await newModel.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "News  deleted successfully" });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

export { addNews, listNews, deleteNews };
