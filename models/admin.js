'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {}
  Admin.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: DataTypes.STRING,
    role: DataTypes.STRING,
    image: DataTypes.STRING // contoh: 'backend', 'frontend', dll
  }, {
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};
