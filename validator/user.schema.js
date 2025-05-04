const { z } = require('zod');

const createUserSchema = z.object({
  fullname: z.string().min(3, 'Nama wajib diisi'),
  slug: z.string().optional(),
  email: z.string().email('Email tidak valid'),
  phone: z.string().optional(),
  address: z.string().optional(),
  description: z.string().optional(),
  img: z.string().url('URL gambar tidak valid').optional(),
  password: z.string().min(6, 'Password minimal 6 karakter')
});

const updateUserSchema = createUserSchema.partial();

module.exports = { createUserSchema, updateUserSchema };
