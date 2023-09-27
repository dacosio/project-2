const express = require("express");
const router = express.Router();
const yuhwansController = require("../controllers/yuhwansController");

router
  .route("/yuhwans")
  .post(yuhwansController.createYuhwan)
  .get(yuhwansController.getAllYuhwans)
  .put(yuhwansController.updateYuhwan)
  .delete(yuhwansController.deleteYuhwan);

module.exports = router;
