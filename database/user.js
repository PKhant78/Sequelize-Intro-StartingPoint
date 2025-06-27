const { DataTypes } = require("sequelize");
const db = require("./db");

// TASK 2: Define the User model here
 // You should define the following columns:
  // - name: string, required
const User = db.define("user", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

module.exports = User;
