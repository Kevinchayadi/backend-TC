// controllers/Admin.controller.js
const adminServices = require('../services/AdminService');
const { createAdminSchema, updateAdminSchema } = require('../validator/admin.schema');

class AdminController {
  async index(req, res) {
    try {
      const data = await adminServices.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const data = await adminServices.getById(req.params.id);
      if (!data) return res.status(404).json({ message: 'Admin not found' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const parsed = createAdminSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await adminServices.create(parsed);
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
      const parsed = updateAdminSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await adminServices.update(req.params.id, parsed);
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
      const result = await adminServices.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new AdminController();
