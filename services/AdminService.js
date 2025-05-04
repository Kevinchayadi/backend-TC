// services/admin.service.js
const { admin } = require('../models');

class AdminService {
  async getAll() {
    return await admin.findAll();
  }

  async getById(id) {
    return await admin.findByPk(id);
  }

  async create(data) {
    return await admin.create(data);
  }

  async update(id, data) {
    const Admin = await admin.findByPk(id);
    if (!Admin) throw new Error('Admin not found');
    return await admin.update(data);
  }

  async delete(id) {
    const Admin = await admin.findByPk(id);
    if (!Admin) throw new Error('Admin not found');
    await admin.destroy();
    return { message: 'Admin deleted' };
  }
}

module.exports = new AdminService();
