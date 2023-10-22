const express = require("express");
const router = express.Router();
const cropController = require("../controllers/cropController");
const verifyJWT = require("../middleware/verifyJWT");

// this is a middleware for secure routes
router.use(verifyJWT);

router
  .route("/crops")
  .get(cropController.getAllCrops)

module.exports = router;
