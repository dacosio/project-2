const express = require("express");
const router = express.Router();
const cardController = require("../controllers/cardController");
// const verifyJWT = require("../middleware/verifyJWT");

// router.use(verifyJWT);

router
  .route("/card")
  .get(cardController.getCard)
  .post(cardController.createCard);

module.exports = router;
