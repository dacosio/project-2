const express = require('express');
const router = express.Router();
const searchController = require('../controllers/searchController');

router.route("/search").get(searchController.getSearchDetails);

module.exports = router;