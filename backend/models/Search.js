const mongoose = require('mongoose');

const SearchSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  about: {
    type: String,
    required: true,
  },
  ideal_temp: {
    type: String,
    required: true
  },
  humidity: {
    type: String,
    required: true
  },
  growing_period: {
    type: String,
    required: true
  },
  fertilizer_composition: {
    type: String,
    required: true
  }
});

const Search = mongoose.model('search', SearchSchema);
module.exports = Search;