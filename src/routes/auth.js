const express = require("express");
const router = express.Router();

const { auth } = require('../controllers');

router.post("/register", auth.register);
router.post("/login", auth.login);

module.exports = function (app) {
  app.use("/", router);
};
