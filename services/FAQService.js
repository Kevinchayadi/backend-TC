// services/FAQ.service.js
const { FAQ } = require('../models');

class FAQService {
  async getAll() {
    return await FAQ.findAll();
  }

  async getById(id) {
    return await FAQ.findByPk(id);
  }

  async create(data) {
    return await FAQ.create(data);
  }

  async update(id, data) {
    const FAQ = await FAQ.findByPk(id);
    if (!FAQ) throw new Error('FAQ not found');
    return await FAQ.update(data);
  }

  async delete(id) {
    const FAQ = await FAQ.findByPk(id);
    if (!FAQ) throw new Error('FAQ not found');
    await FAQ.destroy();
    return { message: 'FAQ deleted' };
  }
}

module.exports = new FAQService();
