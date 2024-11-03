const pool = require("../db");

const UserPreferencesModel = {
  getUserPreferences: async (userId) => {
    const result = await pool.query(
      "SELECT * FROM UserPreferences WHERE UserId = $1",
      [userId],
    );
    return result.rows;
  },
  createUserPreference: async (
    userId,
    languageCode
  ) => {
    const result = await pool.query(
      `INSERT INTO userPreferences 
      (UserId, LanguageCode) 
      VALUES ($1, $2) RETURNING *`,
      [userId, languageCode],
    );
    return result.rows[0];
  },
  removeUser: async userId => {
    const result = await pool.query(
      ` DELETE FROM Users WHERE ID = $1 RETURNING *`,
      [userId],
    );
    return result.rows[0];
  },
};

module.exports = UserPreferencesModel;
