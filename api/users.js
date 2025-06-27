const express = require("express");
const router = express.Router();
const { Task, User } = require("../database");

// GET all users
router.get("/", async (req, res) => {
  try {
    const user = await User.findAll();
    res.json(user);
  } catch (error) {
    res.status(501).send("Failed to get all users");
  }
  
});

// GET a single user by id
router.get("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id)
    res.send(user)
  } catch (error) {
    res.status(501).send("Failed to get user", req.params.id);
  } 
});

// Patch a user by id
router.patch("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id)
    
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    await user.update(req.body);
    res.send(user);
  } catch (error) {
    res.status(501).send("Failed to patch user");
  }
});

// Delete a user by id
router.delete("/:id", async (req, res) => {
  try {
    const id = parseInt(req.params.id);
    const user = await User.findByPk(id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    await user.destroy();
    res.send(user);
  }
  catch (error) {
    res.status(501).send("Failed to delete user");
  }
});

// Create a new user
router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.send(user);
  }
  catch (error) {
    res.status(501).send("Failed to create user");
  }
});

module.exports = router;