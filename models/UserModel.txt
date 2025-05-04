const db = require("../config/db.js");

class UserModel {
  static async signup(newUser) {
    try {
      return await db.create({
        name: newUser.name,
        email: newUser.email,
        password: newUser.password,
      });
    } catch (error) {
      console.error(`Error: ${error}`);
    }
  }
}

module.exports = UserModel;
