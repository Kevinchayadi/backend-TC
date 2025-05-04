// services/product.service.js
const { product } = require('../models');

class ProductService {
  async getAll() {
    return await product.findAll();
  }

  async getById(id) {
    return await product.findByPk(id);
  }

  async create(data) {
    return await product.create(data);
  }

  async update(id, data) {
    const product = await product.findByPk(id);
    if (!product) throw new Error('Product not found');
    return await product.update(data);
  }

  async delete(id) {
    const product = await product.findByPk(id);
    if (!product) throw new Error('Product not found');
    await product.destroy();
    return { message: 'Product deleted' };
  }
}

module.exports = new ProductService();
