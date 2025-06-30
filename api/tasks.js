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
    res.sendStatus(501);
  }
  
});

// GET a single task by id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = await Task.findByPk(id)
    res.send(task)
  } catch (error) {
    res.status(501).send("Failed to get task", req.params.id);
  } 
});

// Patch a task by id
router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = await Task.findByPk(id)
    
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }

    await task.update(req.body);
    res.send(task);
  } catch (error) {
    res.status(501).send("Failed to patch task");
  }
});

// Delete a task by id
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const task = await Task.findByPk(id);
    if (!task) {
      return res.status(404).json({ error: "Task not found" });
    }
    await task.destroy();
    res.send(task);
  }
  catch (error) {
    res.status(501).send("Failed to delete task");
  }
});

// Create a new task
router.post("/", async (req, res) => {
  try {
    const task = await Task.create(req.body);
    res.send(task);
  }
  catch (error) {
    res.status(501).send("Failed to create task");
  }
});

module.exports = router;

// TASK 5: Create a new routes file for users, and add as many routes as you see fit
// Don't forget to export the router, and import it into api/index.js
