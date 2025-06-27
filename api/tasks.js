const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// TASK 4: Add the necessary routes here
// This time, use your newly created Sequelize models instead of the dummy database

// GET all tasks
router.get("/", async (req, res) => {
  try {
    const task = await Task.findAll();
    res.json(task);
  } catch (error) {
    res.status(501).send("Not implemented");
  }
  
});

// GET a single task by id

router.get("/:id", async (req, res) => {
  try {
    const task = Task.findByPk(req.params.id);
    res.status.send(task)
  } catch (error) {
    res.status(501).send("Not implemented");
  }
  
});

// Patch a task by id

// Delete a task by id

// Create a new task

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
