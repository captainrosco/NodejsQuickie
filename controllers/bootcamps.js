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
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ succuess: true, msg: "Create new bootcamp" });
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
