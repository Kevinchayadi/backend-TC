const { z } = require('zod');

const createArticleSchema = z.object({
  title: z.string().min(3, 'Judul minimal 3 karakter'),
  content: z.string().min(10, 'Konten minimal 10 karakter'),
  image: z.string().url('Image harus berupa URL').optional()
});

const updateArticleSchema = createArticleSchema.partial();

module.exports = {
  createArticleSchema,
  updateArticleSchema
};
