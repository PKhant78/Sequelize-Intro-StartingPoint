const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 1: Define the Task model here
  // You should define the following columns:
  // - title: string, required
  // - description: string, required
  // - completed: boolean, default false

const Task = db.define("task", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  completed: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  }

});

module.exports = Task;
