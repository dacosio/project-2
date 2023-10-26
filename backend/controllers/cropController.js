const Crop = require("../models/Crop");
const Crops = require("../models/Crop");
const CropEncyclopedia = require("./../models/CropEncyclopedia");
const { ObjectId } = require("mongodb");

const getAllCrops = async (req, res) => {
  try {
    const userId = req.id;
    const { isPlanted } = req.query;
    console.log(typeof isPlanted);
    let crops;
    if (
      isPlanted !== undefined &&
      isPlanted !== "" &&
      isPlanted !== null &&
      (isPlanted == "true" || isPlanted == "false")
    ) {
      crops = await Crops.find({ userId, isPlanted }).lean();
    } else {
      crops = await Crops.find({ userId }).lean();
    }

    if (!crops?.length) {
      return res.status(400).json({ message: "No crops found." });
    }
    res.status(200).json(crops);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addCrop = async (req, res) => {
  try {
    const userId = req.id;
    const { cropId, plantNow } = req.body;

    if (!ObjectId.isValid(cropId)) throw new Error("Invalid Id");

    if (!cropId && plantNow === undefined && typeof plantNow !== "boolean") {
      throw new Error("Crop Id and plant now is required");
    }

    const cropEnc = await CropEncyclopedia.findById(cropId)
      .select("-_id -createdAt -updatedAt")
      .lean();

    //   todo estimatedyield
    let cropData;
    if (cropEnc) {
      if (plantNow) {
        cropData = await Crop.create({
          userId,
          isFavorite: false,
          isPlanted: plantNow,
          datePlanted: new Date(),
          estimatedYield: 10,
          ...cropEnc,
        });
      } else {
        cropData = await Crop.create({
          userId,
          isFavorite: false,
          isPlanted: plantNow,
          estimatedYield: 10,
          ...cropEnc,
        });
      }
    } else {
      return res
        .status(400)
        .json({ message: "Crop from encylopedia not found" });
    }

    res.status(200).json(cropData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const favoriteCrop = async (req, res) => {
  try {
    const { id, isFavorite } = req.body;
    const updatedCrop = await Crops.findByIdAndUpdate(
      id,
      { $set: { isFavorite } },
      { new: true }
    );
    if (!updatedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }
    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const plantNow = async (req, res) => {
  try {
    const { id } = req.body;
    const updatedCrop = await Crops.findByIdAndUpdate(
      id,
      { $set: { isPlanted: true, datePlanted: new Date() } },
      { new: true }
    );
    if (!updatedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }
    res.status(200).json(updatedCrop);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const removeCrop = async (req, res) => {
  try {
    const { id } = req.body;
    const deletedCrop = await Crops.findByIdAndRemove(id);

    if (!deletedCrop) {
      return res.status(404).json({ message: "Crop not found" });
    }

    return res.json({ message: "Crop deleted successfully" });
  } catch (error) {
    return res.status(500).json({ error: "Server error" });
  }
};

module.exports = {
  getAllCrops,
  favoriteCrop,
  removeCrop,
  plantNow,
  addCrop,
};
