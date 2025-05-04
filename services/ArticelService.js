// services/Articel.aervice.js
const { articel } = require('../models');

class ArticelService {
  async getAll() {
    return await articel.findAll();
  }

  async getById(id) {
    return await articel.findByPk(id);
  }

  async create(data) {
    return await articel.create(data);
  }

  async update(id, data) {
    const Articel = await articel.findByPk(id);
    if (!Articel) throw new Error('Articel not found');
    return await articel.update(data);
  }

  async delete(id) {
    const Articel = await articel.findByPk(id);
    if (!Articel) throw new Error('Articel not found');
    await articel.destroy();
    return { message: 'Articel deleted' };
  }
}

module.exports = new ArticelService();
