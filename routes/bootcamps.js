const express = require("express");
const router = express.Router();

router.get("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ succuess: true, msg: "Show bootcamps" });
});

router.post("/api/v1/bootcamps", (req, res) => {
  res.status(200).json({ succuess: true, msg: "Create new bootcamp" });
});

router.get("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ succuess: true, msg: `Get bootcamp ${req.params.id}` });
});

router.put("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ succuess: true, msg: `Update bootcamp ${req.params.id}` });
});

router.post("/api/v1/bootcamps/:id", (req, res) => {
  res
    .status(200)
    .json({ succuess: true, msg: `Delete bootcamp ${req.params.id}` });
});

module.exports = router;
