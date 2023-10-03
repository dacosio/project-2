const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  body: {
    type: String,
    required: true,
  }
},
{
  timestamps: true,
});

const Card = mongoose.model('card', CardSchema);
module.exports = Card;