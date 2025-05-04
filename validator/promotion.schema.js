const { z } = require('zod');

const createPromotionSchema = z.object({
  photo: z.string().optional(),
  slogan: z.string().optional(),
  title: z.string().optional(),
  desc: z.string().optional()
});

const updatePromotionSchema = createPromotionSchema.partial();

module.exports = { createPromotionSchema, updatePromotionSchema };
