const Bootcamp = require("../models/Bootcamp");

//Get All Bootcamps
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: "Show All bootcamps" });
};

//Get a Bootcamp
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succuess: true, msg: `Get a bootcamp ${req.params.id}` });
};

//Create a Bootcamp
exports.createBootcamp = async (req, res, next) => {
  try {
    const bootcamp = await Bootcamp.create(req.body);
    res.status(201).json({
      success: true,
      data: bootcamp
    });
  } catch (err) {
    res.status(400).json({ sucess: false });
  }
};

//Delete a Bootcamp
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succuess: true, msg: `Delete bootcamp ${req.params.id}` });
};

//Update a Bootcamp
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ succuess: true, msg: `Update bootcamp ${req.params.id}` });
};
