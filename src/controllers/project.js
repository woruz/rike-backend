const {
  validate_project_add,
  validate_task_add,
  validate_subtask_add,
} = require("../config/validator/projectValidation");
const Project = require("../models/projects");
const SubTask = require("../models/subTasks");
const Task = require("../models/tasks");
const error = require("../utils/error");

module.exports = {
  create_project: (req, res, next) => {
    const postData = req.body;

    const validation = validate_project_add(postData);

    if (validation.error) {
      return next(error(400, validation.error.details[0].message));
    }
    try {
      const newProject = new Project(postData);

      newProject.save()
        .then((response) => {
          res.json({ success: true, response });
        })
        .catch((err) => {
          console.log({err})
          next(err);
        });
    } catch (error) {
      next(error);
    }
  },

  create_task: (req, res, next) => {
    const postData = req.body;

    const validation = validate_task_add(postData);

    if (validation.error) {
      next(error(400, validation.error.details[0].message));
    }
    try {
      const newTask = new Task(postData);

      newTask
        .save()
        .then((response) => {
          res.json({ success: true, response });
        })
        .catch((err) => {
          next(err);
        });
    } catch (error) {
      next(error);
    }
  },

  create_subTask: (req, res, next) => {
    const postData = req.body;

    const validation = validate_subtask_add(postData);

    if (validation.error) {
      next(error(400, validation.error.details[0].message));
    }
    try {
      const newSubTask = new SubTask(postData);

      newSubTask
        .save()
        .then((response) => {
          res.json({ success: true, response });
        })
        .catch((err) => {
          next(err);
        });
    } catch (error) {
      next(error);
    }
  },

  get_all_project: async (req, res, next) => {
    try {
      const allProjects = await Project.aggregate([
        {
          $lookup: {
            from: "tasks",
            let: { projectId: "$_id" },
            pipeline: [
              {
                $match: {
                  $expr: { $eq: ["$project_id", { $toString: "$$projectId" }] },
                },
              },
              {
                $lookup: {
                  from: "subtasks",
                  let: { taskId: "$_id" },
                  pipeline: [
                    {
                      $match: {
                        $expr: { $eq: ["$task_id", { $toString: "$$taskId" }] },
                      },
                    },
                  ],
                  as: "subTasks",
                },
              },
            ],
            as: "tasks",
          },
        },
      ]);

      res.json({success: true, response: allProjects})
    } catch (error) {
        next(error)
    }
  },
};
