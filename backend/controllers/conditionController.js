const Humidity = require("../models/Humidity");
const Temperature = require("../models/Temperature");
const Precipitation = require("../models/Precipitation");
const axios = require("axios");
const CropEncyclopedia = require("./../models/CropEncyclopedia");
const { capitalizeFirstLetter } = require("../helpers/formatter");

const predictCrop = async (req, res) => {
  try {
    let { city, month } = req.body;
    city = city.toLowerCase();
    month = month[0].toUpperCase() + month.slice(1);

    if (!city || !month) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const humidity = await Humidity.find({ city, month })
      .select("humidity")
      .lean();
    const temperature = await Temperature.find({ city, month })
      .select("mean")
      .lean();
    const precipitation = await Precipitation.find({ city, month })
      .select("precipitation")
      .lean();

    const url = "https://crpo-ml.onrender.com/predict-crop";
    const data = {
      humidity: humidity[0]["humidity"],
      temperature: temperature[0]["mean"],
      rainfall: precipitation[0]["precipitation"],
    };

    const result = await axios.post(url, data);
    const predictedCrop = result.data.prediction;
    const cropName = capitalizeFirstLetter(predictedCrop[0]);
    let cropId;
    if (cropName) {
      cropId = await CropEncyclopedia.find({ cropName }).select("_id").lean();
      cropId = cropId[0]["_id"];
    }
    res.status(200).json({ cropName, cropId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  predictCrop,
};
