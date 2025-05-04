// controllers/Articel.controller.js
const articelService = require('../services/ArticelService');
const { createArticelSchema, updateArticelSchema } = require('../validator/articel.schema');

class ArticelController {
  async index(req, res) {
    try {
      const data = await articelService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const data = await articelService.getById(req.params.id);
      if (!data) return res.status(404).json({ message: 'Articel not found' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const parsed = createArticelSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await articelService.create(parsed);
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
      const parsed = updateArticelSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await articelService.update(req.params.id, parsed);
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
      const result = await articelService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new ArticelController();
