const express = require("express");
const cors = require("cors");
require("dotenv").config();
const cookieParser = require("cookie-parser");

const { port } = require("./config/config");
const connectDB = require("./utils/connectDB");
const routes = require("./routes/index.js");

const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieParser());
connectDB();

routes(app)

app.use((req, res, next) => {
  res.status(404).json({
    success: false,
    statusCode: 404,
    message: "Endpoint not found",
  });
});

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";
  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(port, console.log(`port running on port number ${port}`));
