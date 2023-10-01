const Card = require("../models/Card");

const getCard = async (req, res) => {
  try {
    const cards = await Card.find({});

    res.status(200).json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const createCard = async (req, res) => {
  try {
    const { headerText, subText, description } = req.body;

    if (![headerText, subText, description].every(Boolean)) {
      return res.status(400).json({ message: "All fields are required." });
    }

    const card = await Card.create({
      headerText,
      subText,
      image:
        "https://fastly.picsum.photos/id/235/1200/500.jpg?hmac=QZQVKfjXK390HjcIi_E2NKw_DvFZjBz41k6PKJCE5ho",
      description,
    });

    if (card) {
      return res.status(201).json({ message: "New Card Created", data: card });
    } else {
      return res.status(400).json({ message: "Error in creating card" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
module.exports = {
  getCard,
  createCard,
};
