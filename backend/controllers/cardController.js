const Card = require('../models/Card');

const cardController = {
  createCard: async (req, res) => {
    try {
      const { title, body } = req.body;

      const newCard = new Card({
        title,
        body
      });

      console.log('Request Body:', req.body);
      await newCard.save();

      res.status(201).json({ message: 'Card record created successfully', data: newCard });
    } catch (error) {
      res.status(500).json({ error: 'Failed to create card record', details: error.message });
    }
  },

  getCardDetails: async (req, res) => {
    try {
      console.log("INSIDE Get Card Details-->");
      const cardData = await Card.find({}).lean();
      console.log("DATA-->", cardData);
      res.status(200).json(cardData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve card data', details: error.message });
    }
  }
};

module.exports = cardController;
