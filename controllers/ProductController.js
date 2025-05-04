// controllers/product.controller.js
const productService = require('../services/ProductService');
const { createProductSchema, updateProductSchema } = require('../validator/product.schema');

class ProductController {
  async index(req, res) {
    try {
      const data = await productService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const data = await productService.getById(req.params.id);
      if (!data) return res.status(404).json({ message: 'Product not found' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const parsed = createProductSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await productService.create(parsed);
      res.status(201).json(data);
    } catch (error) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async update(req, res) {
    try {
      const parsed = updateProductSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await productService.update(req.params.id, parsed);
      res.json(data);
    } catch (error) {
      if (error.name === 'ZodError') {
        return res.status(400).json({ errors: error.errors });
      }
      res.status(500).json({ error: error.message });
    }
  }

  async destroy(req, res) {
    try {
      const result = await productService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ProductController();
