const bcrypt = require("bcryptjs");

const saltRounds = 10;

async function hashPassword(plainPassword) {
  try {
    return await bcrypt.hash(plainPassword, saltRounds);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

async function comparePassword(plainPassword, hashedPassword) {
  try {
    return await bcrypt.compare(plainPassword, hashedPassword);
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}

module.exports = {
  hashPassword,
  comparePassword,
};
