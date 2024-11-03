const UserModel = require('../models/userModel');
const UserPreferencesModel = require('../models/userPreferencesModel');

const UserService = {
  getUsers: async () => {
    return await UserModel.getAllUsers();
  },
  createUser: async (name) => {
    return await UserModel.createUser(name);
  },
  getUserPreferences: async (userId) => {
    return await UserPreferencesModel.getUserPreferences(userId);
  },
  createUserPreference: async (userId, languageCode) => {
    return await UserPreferencesModel.createUserPreference(userId, languageCode);
  },
  removeUser: async userId => await UserPreferencesModel.removeUser(userId)
};

module.exports = UserService;
