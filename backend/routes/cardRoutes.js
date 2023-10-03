const express = require('express');
const router = express.Router();
const cardController = require('../controllers/cardController');

router.route("/card").get(cardController.getCardDetails);
// router.get('/card', cardController.getCardDetails);

module.exports = router;