const Search = require('../models/Search');

const searchController = {
  getSearchDetails: async (req, res) => {
    try {
      console.log("Details-->");
      const searchData = await Search.find({}).lean();
      //const searchData = await Search.findOne({ name: "Carrot" }).lean();

      console.log("DATA-", searchData);
      res.status(200).json(searchData);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve Search data', details: error.message });
    }
  }
};

module.exports = searchController;