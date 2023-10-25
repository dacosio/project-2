const express = require("express");
const router = express.Router();
const conditionController = require("../controllers/conditionController");
const verifyJWT = require("../middleware/verifyJWT");

router.route("/predict-crop").post(conditionController.predictCrop);

module.exports = router;
