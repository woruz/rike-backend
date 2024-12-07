const mongoose = require("mongoose");

const subTaskSchema = new mongoose.Schema(
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
          type: String,
      },
      priority: {
        type: String,
        enum: ['high','medium','low'],
        default: 'high'
      },
      status: {
          type: String,
          enum: ['new','pending','completed','deleted'],
          default: 'new'
      },
      task_id: {
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
  
  const SubTask = mongoose.model("SubTask", subTaskSchema);
  
  module.exports = SubTask;