const Yuhwan = require("../models/Yuhwan");

const getAllYuhwans = async (req, res) => {
  try {
    console.log(req.body);

    const yuhwans = await Yuhwan.find({}).lean();
    if (!yuhwans?.length) {
      return res.status(400).json({ message: "No yuhwans found." });
    }

    res.status(200).json(yuhwans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getYuhwan = async (req, res) => {
  try {
    console.log(req.body);
    const { id } = req.body;

    const yuhwans = await Yuhwan.find({ id: id }).lean();
    if (!yuhwans?.length) {
      return res.status(400).json({ message: "No yuhwans found." });
    }

    res.status(200).json(yuhwans);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getAllYuhwans,
  getYuhwan,
};
