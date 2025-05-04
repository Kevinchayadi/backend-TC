// controllers/FAQ.controller.js
const FaqServices = require('../services/FAQService');
const { createFAQSchema, updateFAQSchema } = require('../validator/FAQ.schema');

class FAQController {
  async index(req, res) {
    try {
      const data = await FaqServices.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const data = await FaqServices.getById(req.params.id);
      if (!data) return res.status(404).json({ message: 'FAQ not found' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const parsed = createFAQSchema.parse(req.body);
      const data = await FaqServices.create(parsed);
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
      const parsed = updateFAQSchema.parse(req.body);
      const data = await FaqServices.update(req.params.id, parsed);
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
      const result = await FaqServices.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new FAQController();
