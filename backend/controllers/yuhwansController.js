const Yuhwan = require("../models/Yuhwan");

const getAllYuhwans = async (req, res) => {
  try {
    const yuhwans = await Yuhwan.find({}).lean();

    res.status(200).json(yuhwans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createYuhwan = async (req, res) => {
  try {
    const { title, subtitle, description } = req.body;

    if (![title, subtitle, description].every(Boolean)) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const yuhwan = await Yuhwan.create({
      avatar: "https://picsum.photos/300/300?random=",
      title,
      subtitle,
      image: "https://picsum.photos/200/300?random=",
      description,
    });

    if (yuhwan) {
      return res
        .status(201)
        .json({ message: "New yuhwan created", data: yuhwan });
    } else {
      return res.status(400).json({ message: "Invalid yuhwan data received" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const deleteYuhwan = async (req, res) => {
  try {
    const { id } = req.body;

    if (!id) {
      return res.status(400).json({ message: "Yuhwan ID required" });
    }

    const yuhwan = await Yuhwan.findById(id).exec();

    if (!yuhwan) {
      return res.status(400).json({ message: "Yuhwan not found" });
    }

    const result = await yuhwan.deleteOne();

    const response = `Yuhwan '${result.title}' with ID ${result._id} deleted`;

    res.status(200).json({ message: response });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllYuhwans,
  createYuhwan,
  deleteYuhwan,
};
