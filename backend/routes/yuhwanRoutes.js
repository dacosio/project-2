const express = require("express");
const router = express.Router();
const yuhwansController = require("../controllers/yuhwansController");

router.route("/yuhwans").get(yuhwansController.getAllYuhwans);
router.route("/yuhwan").get(yuhwansController.getYuhwan);

module.exports = router;
