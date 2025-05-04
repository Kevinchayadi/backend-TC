const { z } = require('zod');

const createAdminSchema = z.object({
  username: z.string().min(3, 'Username minimal 3 karakter'),
  email: z.string().email('Format email tidak valid'),
  password: z.string().min(6, 'Password minimal 6 karakter'),
  img: z.string().url('Gambar harus berupa URL').optional(),
  role: z.string().optional()
});

const updateAdminSchema = createAdminSchema.partial();

module.exports = {
  createAdminSchema,
  updateAdminSchema
};
