// services/User.service.js
const { User } = require('../models');

class UserService {
  async getAll() {
    return await User.findAll();
  }

  async getById(id) {
    return await User.findByPk(id);
  }

  async create(data) {
    return await User.create(data);
  }

  async update(id, data) {
    const User = await User.findByPk(id);
    if (!User) throw new Error('User not found');
    return await User.update(data);
  }

  async delete(id) {
    const User = await User.findByPk(id);
    if (!User) throw new Error('User not found');
    await User.destroy();
    return { message: 'User deleted' };
  }
}

module.exports = new UserService();
