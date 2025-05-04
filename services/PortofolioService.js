// services/Portofolio.service.js
const { Portofolio } = require('../models');

class PortofolioService {
  async getAll() {
    return await Portofolio.findAll();
  }

  async getById(id) {
    return await Portofolio.findByPk(id);
  }

  async create(data) {
    return await Portofolio.create(data);
  }

  async update(id, data) {
    const Portofolio = await Portofolio.findByPk(id);
    if (!Portofolio) throw new Error('Portofolio not found');
    return await Portofolio.update(data);
  }

  async delete(id) {
    const Portofolio = await Portofolio.findByPk(id);
    if (!Portofolio) throw new Error('Portofolio not found');
    await Portofolio.destroy();
    return { message: 'Portofolio deleted' };
  }
}

module.exports = new PortofolioService();
