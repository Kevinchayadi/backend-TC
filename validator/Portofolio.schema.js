const { z } = require('zod');

const createPortfolioSchema = z.object({
  title: z.string().min(3, 'Judul wajib diisi'),
  description: z.string().optional(),
  image: z.string().url('URL gambar tidak valid').optional(),
  link: z.string().url('Link harus berupa URL').optional()
});

const updatePortfolioSchema = createPortfolioSchema.partial();

module.exports = { createPortfolioSchema, updatePortfolioSchema };
