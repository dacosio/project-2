const dotenv = require("dotenv");
// require("./services/scheduler");
const express = require("express");
const app = express();
const path = require("path");
const { logger, logEvents } = require("./middleware/logger");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const corsOptions = require("./config/corsOptions");
const connectDB = require("./config/dbConn");
const mongoose = require("mongoose");
const swaggerUi  = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');


dotenv.config();
const PORT = process.env.PORT || 3500;
connectDB();
app.use(logger);
app.use(cors(corsOptions));

// const Temperature = require("./models/Temperature.js");
// const Precipitation = require("./models/Precipitation.js");
// const Humidity = require("./models/Humidity.js");
const Crop = require("./models/Crop");

const { temperature, precipitation, humidity, crop } = require("./data/index.js");

// gives the ability to process json data from the frontend
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

const options = {
  failOnErrors: true, 
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Sprout API',
      version: '1.0.0',
    },
  },
  apis: ['./controllers/*.js','./routes/*.js'],
};
const specs = swaggerJsdoc(options);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
// this is to make the public static file accessible globally, ex. public/css/style.css can be called with css/styles.css
app.use("/", express.static(path.join(__dirname, "public")));
app.use("/api", require("./routes/cropRoutes"));

app.use("/", require("./routes/root"));
app.use("/auth", require("./routes/authRoutes"));
app.use("/api", require("./routes/userRoutes"));
app.use("/api", require("./routes/todoRoutes"));



app.all("*", (req, res) => {
  res.status(404);
  if (req.accepts("html")) {
    res.sendFile(path.join(__dirname, "views", "404.html"));
  } else if (req.accepts("json")) {
    res.json({ message: "404 Not Found" });
  } else {
    res.type("txt").send("404 Not Found");
  }
});
// this middleware will catch whenever our routes/controllers has an error
app.use(errorHandler);

mongoose.connection.once("open", () => {
  console.log("Connected to Database");
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    // Temperature.insertMany(temperature);
    // Precipitation.insertMany(precipitation);
    // Humidity.insertMany(humidity);
    // Crop.insertMany(crop);
  });
});

mongoose.connection.on("error", (err) => {
  console.log(err);
  logEvents(
    `${err.no}: ${err.code}\t${err.syscall}\t${err.hostname}`,
    "mongoErrLog.log"
  );
});

module.exports = app;
