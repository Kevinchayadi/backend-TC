const { z } = require('zod');

// const transactionDetailSchema = z.object({
//   productId: z.number().int('ID produk harus berupa angka'),
//   quantity: z.number().int().min(1, 'Minimal 1 item'),
//   price: z.number().min(0, 'Harga tidak valid'),
//   subtotal: z.number().min(0, 'Subtotal tidak valid')
// });

// const createTransactionSchema = z.object({
//   userID: z.number().int('ID user harus angka'),
//   totalAmount: z.number().min(0, 'Total tidak valid'),
//   paymentStatus: z.string().min(3, 'Status pembayaran wajib diisi'),
//   details: z.array(transactionDetailSchema).min(1, 'Minimal 1 detail transaksi')
// });

const createTransactionSchema = z.object({
  userID: z.number({
    required_error: 'Data user dibutuhkan',
    invalid_type_error: 'Data user tidak valid'
  }),
  totalAmount: z.number({
    required_error: 'Total dibutuhkan',
    invalid_type_error: 'Total tidak valid'
  }),
  paymentStatus: z.string({
    required_error: 'Status pembayaran dibutuhkan',
    invalid_type_error: 'Status pembayaran tidak valid'
  }),
  productId: z.number({
    required_error: 'Data produk dibutuhkan',
    invalid_type_error: 'Data produk tidak valid'
  }),
  quantity: z.number({
    required_error: 'Jumlah produk dibutuhkan',
    invalid_type_error: 'Jumlah produk tidak valid'
  }),
  price: z.number({
    required_error: 'Harga produk dibutuhkan',
    invalid_type_error: 'Harga produk tidak valid'
  })
});

  const updateTransactionSchema = createTransactionSchema.partial()


module.exports = { createTransactionSchema, updateTransactionSchema };
