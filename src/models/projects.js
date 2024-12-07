const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
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
        default: []
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

const Project = mongoose.model("Project", projectSchema);

module.exports = Project;
