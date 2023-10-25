const express = require("express");
const router = express.Router();
const cropController = require("../controllers/cropController");
const verifyJWT = require("../middleware/verifyJWT");
const { crop } = require("../data");

router
  .route("/crops")
  .get(cropController.getAllCrops)
  .put(cropController.favoriteCrop)
  .delete(cropController.removeCrop);

module.exports = router;
