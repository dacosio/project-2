const express = require("express");
const router = express.Router();
const cropController = require("../controllers/cropController");

router
  .route("/crops")
  .get(cropController.getAllCrops)
  .post(cropController.addCrop)
  .put(cropController.favoriteCrop)
  .delete(cropController.removeCrop);

module.exports = router;
