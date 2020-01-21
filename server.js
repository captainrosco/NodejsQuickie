const express = require("express");
const dotenv = require("dotenv");

//Config
dotenv.config({ path: "./config/config.env" });

//Routes
const bootcamps = require("./routes/bootcamps");

const app = express();
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("Server is running"));
