// controllers/Promotion.controller.js
const promotionServices = require('../services/PromotionService');
const { createPromotionSchema, updatePromotionSchema } = require('../validator/promotion.schema');

class PromotionController {
  async index(req, res) {
    try {
      const data = await promotionServices.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const data = await promotionServices.getById(req.params.id);
      if (!data) return res.status(404).json({ message: 'Promotion not found' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const parsed = createPromotionSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await promotionServices.create(parsed);
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
      const parsed = updatePromotionSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await promotionServices.update(req.params.id, parsed);
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
      const result = await promotionServices.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new PromotionController();
