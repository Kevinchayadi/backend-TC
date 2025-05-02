'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TransactionDetail extends Model {
    static associate(models) {
      this.belongsTo(models.TransactionHeader, {
        foreignKey: 'transactionHeaderId',
        as: 'header'
      });
    }
  }
  TransactionDetail.init({
    transactionHeaderId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    price: DataTypes.FLOAT,
    subtotal: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'TransactionDetail',
  });
  return TransactionDetail;
};