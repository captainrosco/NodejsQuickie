const express = require("express");
const router = express.Router();
const {
  getBootcamp,
  getBootcamp,
  createBootcamp,
  deleteBootcamp,
  updateBootcamp
} = require("../controllers/bootcamps");

router
  .route("/")
  .get(getBootcamp)
  .post(createBootcamp);

router
  .route("/:id")
  .get(getBootcamp)
  .put(updateBootcamp)
  .delete(deleteBootcamp);

module.exports = router;
