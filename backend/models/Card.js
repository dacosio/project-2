const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    headerText: {
      type: String,
      required: true,
    },
    subText: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Card", cardSchema);
