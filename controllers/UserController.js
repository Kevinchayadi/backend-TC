// controllers/User.controller.js
const userService = require('../services/UserService');
const { createUserSchema, updateUserSchema } = require('../validator/user.schema');

class UserController {
  async index(req, res) {
    try {
      const data = await userService.getAll();
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async show(req, res) {
    try {
      const data = await userService.getById(req.params.id);
      if (!data) return res.status(404).json({ message: 'User not found' });
      res.json(data);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async store(req, res) {
    try {
      const parsed = createUserSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await userService.create(parsed);
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
      const parsed = updateUserSchema.parse(req.body);
      if (req.file) {
        parsed.image = req.file.filename;  // Menambahkan image ke parsed
      }
      const data = await userService.update(req.params.id, parsed);
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
      const result = await userService.delete(req.params.id);
      res.json(result);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

module.exports = new UserController();
