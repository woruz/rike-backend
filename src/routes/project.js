const express = require("express");
const router = express.Router();

const {project} = require('../controllers')

router.post('/add', project.create_project)
router.post('/task/add', project.create_task)
router.post('/subTask/add', project.create_subTask)
router.get('/get', project.get_all_project)

module.exports = function (app) {
    app.use("/project", router);
};
  