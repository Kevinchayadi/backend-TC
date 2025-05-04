const { z } = require('zod');

const createFaqSchema = z.object({
  question: z.string().min(5, 'Pertanyaan minimal 5 karakter'),
  answer: z.string().min(5, 'Jawaban minimal 5 karakter')
});

const updateFaqSchema = createFaqSchema.partial();

module.exports = {
  createFaqSchema,
  updateFaqSchema
};
