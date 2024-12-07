const { default: mongoose } = require("mongoose");
const { mongodb_uri } = require("../config/config");


const connectDB = () => {
  mongoose
    .connect(mongodb_uri)
    .then(() => {
      console.log("Database is connected");
    })
    .catch((err) => {
      console.log({ err });
      process.exit(1);
    });
};

module.exports = connectDB
