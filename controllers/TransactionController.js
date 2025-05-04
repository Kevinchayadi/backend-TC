const transactionService = require('../services/TransactionService');
const { createTransactionSchema, updateTransactionSchema } = require('../validator/transaction.schema');

module.exports = {
  async store(req, res) {
    try {
      const data = createTransactionSchema.parse(req.body);
      const result = await transactionService.create(data);
      res.status(201).json(result);
    } catch (err) {
      if (err.name === 'ZodError') {
        return res.status(400).json({ errors: err.errors });
      }
      console.error(err);
      res.status(500).json({ message: 'Server error' });
    }
  },

  async index(req, res) {
    try {
      const result = await transactionService.getAll();
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  async show(req, res) {
    try {
      const result = await transactionService.getOne(req.params.id);
      if (!result) return res.status(404).json({ message: 'Transaksi tidak ditemukan' });
      res.status(200).json(result);
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  },

  async update(req, res) {
    try {
      const data = updateTransactionSchema.parse(req.body);
      const result = await transactionService.update(req.params.id, data);
      if (!result) return res.status(404).json({ message: 'Transaksi tidak ditemukan' });
      res.status(200).json(result);
    } catch (err) {
      if (err.name === 'ZodError') {
        return res.status(400).json({ errors: err.errors });
      }
      res.status(500).json({ message: 'Server error' });
    }
  },

  async destroy(req, res) {
    try {
      const deleted = await transactionService.remove(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Transaksi tidak ditemukan' });
      res.status(200).json({ message: 'Transaksi berhasil dihapus' });
    } catch (err) {
      res.status(500).json({ message: 'Server error' });
    }
  }
};
