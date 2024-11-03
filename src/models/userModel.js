const pool = require("../db");

const UserModel = {
  getAllUsers: async () => {
    const result = await pool.query("SELECT * FROM Users");
    return result.rows;
  },
  createUser: async (name) => {
    const result = await pool.query(
      "INSERT INTO users (Name) VALUES ($1)",
      [name],
    );
    return result.rows[0];
  },
};

module.exports = UserModel;
