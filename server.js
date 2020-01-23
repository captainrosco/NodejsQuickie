const express = require("express");
const dotenv = require("dotenv");
const connectDb = require("./config/db");

//Config
dotenv.config({ path: "./config/config.env" });

//Connect Db
connectDb();

//Routes
const bootcamps = require("./routes/bootcamps");

const app = express();
app.use(express.json());
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, console.log("Server is running"));

process.on("unhandleRejection", (err, promise) => {
  console.log(`Error: ${err.message}`);
  server.close(() => {
    process.exit(1);
  });
});
