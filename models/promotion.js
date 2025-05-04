'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Promotion extends Model {}
  Promotion.init({
    image: DataTypes.STRING,
    slogan: DataTypes.STRING,
    title: DataTypes.STRING,
    desc: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Promotion',
  });
  return Promotion;
};
