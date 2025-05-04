const { transactionHeader, transactionDetail, user, sequelize } = require('../models');

module.exports = {
  async create(data) {
    return await sequelize.transaction(async (t) => {
      const { userID, totalAmount, paymentStatus, productId, quantity, price } = data;

      const header = await transactionHeader.create({
        userID,
        totalAmount,
        paymentStatus
      }, { transaction: t });

      const detail = await transactionDetail.create({
        transactionHeaderId: header.id,
        productId,
        quantity,
        price
      }, { transaction: t });

      return { header, detail };
    });
  },

  async getAll() {
    return await transactionHeader.findAll({
      include: [
        { model: transactionDetail, as: 'details' },
        { model: user, as: 'user', attributes: ['id', 'fullname', 'email'] }
      ]
    });
  },

  async getOne(id) {
    return await transactionHeader.findByPk(id, {
      include: [
        { model: transactionDetail, as: 'details' },
        { model: user, as: 'user', attributes: ['id', 'fullname', 'email'] }
      ]
    });
  },

  async update(id, data) {
    return await sequelize.transaction(async (t) => {
      const header = await transactionHeader.findByPk(id, { transaction: t });
      if (!header) return null;

      const { productId, quantity, price, ...headerData } = data;

      await header.update(headerData, { transaction: t });

      const detail = await transactionDetail.findOne({
        where: { transactionHeaderId: id },
        transaction: t
      });

      if (detail) {
        await detail.update({ productId, quantity, price }, { transaction: t });
      } else {
        await transactionDetail.create({
          transactionHeaderId: id,
          productId,
          quantity,
          price
        }, { transaction: t });
      }

      return {
        header,
        detail: await transactionDetail.findOne({
          where: { transactionHeaderId: id },
          transaction: t
        })
      };
    });
  },

  async remove(id) {
    return await sequelize.transaction(async (t) => {
      const header = await transactionHeader.findByPk(id, { transaction: t });
      if (!header) return false;

      await transactionDetail.destroy({
        where: { transactionHeaderId: id },
        transaction: t
      });

      await header.destroy({ transaction: t });
      return true;
    });
  }
};
