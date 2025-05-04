// services/promotion.service.js
const { promotion } = require('../models');

class PromotionService {
  async getAll() {
    return await promotion.findAll();
  }

  async getById(id) {
    return await promotion.findByPk(id);
  }

  async create(data) {
    return await promotion.create(data);
  }

  async update(id, data) {
    const Promotion = await promotion.findByPk(id);
    if (!Promotion) throw new Error('Promotion not found');
    return await promotion.update(data);
  }

  async delete(id) {
    const Promotion = await promotion.findByPk(id);
    if (!Promotion) throw new Error('Promotion not found');
    await promotion.destroy();
    return { message: 'Promotion deleted' };
  }
}

module.exports = new PromotionService();
