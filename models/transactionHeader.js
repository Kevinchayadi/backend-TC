'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class TransactionHeader extends Model {
    static associate(models) {
      this.hasMany(models.TransactionDetail, {
        foreignKey: 'transactionHeaderId',
        as: 'details'
      });
      this.belongsTo(models.User, {
        foreignKey: 'userID',
        as: 'user'
      });
    }
    
  }
  TransactionHeader.init({
    userID: DataTypes.INTEGER,
    totalAmount: DataTypes.FLOAT,
    paymentStatus: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'TransactionHeader',
  });
  return TransactionHeader;
};