const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
      unique: true,
    },
    created_by: {
      type: String,
      required: true,
    },
    assigned_to: {
        type: [String],
    },
    status: {
        type: String,
        enum: ['new','pending','completed','deleted'],
        default: 'new'
    },
    priority: {
      type: String,
      enum: ['high','medium','low'],
      default: 'high'
    },
    project_id: {
        type: String,
        required: true
    },
    start_date: {
      type: Date,
      required: true,
    },
    end_date: {
      type: Date,
      required: true,
    }
  },
  { timestamps: true }
);

const Task = mongoose.model("Task", taskSchema);

module.exports = Task;