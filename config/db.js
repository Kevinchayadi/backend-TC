const { Sequelize } = require('sequelize');
const config = require('./index');

const sequelize = new Sequelize(config.db.name , config.db.user , config.db.password , {
    host: config.db.host,
    dialect: config.db.dialect,
    port: config.db.port,
    logging: config.app.env === 'development' ? console.log : false,
})

try {
    sequelize.authenticate();
} catch(error) {
    console.error(`Connection failed : ${error}`);
};

const testConnection = async () => {
    try {
      await sequelize.authenticate();
      console.log("Database connected");
    } catch (error) {
      console.error("Database connection failed:", error);
      process.exit(1);
    }
  };

  module.exports = {
    sequelize,
    testConnection,
  };

