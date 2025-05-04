const multer = require('multer');
const path = require('path');

// Konfigurasi penyimpanan file
const storage = multer.diskStorage({
  destination: './uploads/', // folder tempat file disimpan
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname)); // memberikan nama unik pada file
  }
});

// Validasi tipe file yang diterima (hanya gambar)
const fileFilter = (req, file, cb) => {
  const allowedMimes = ['image/jpeg', 'image/png', 'image/webp'];
  if (allowedMimes.includes(file.mimetype)) {
    cb(null, true); // file valid
  } else {
    cb(new Error('Hanya file gambar yang diizinkan'), false); // file tidak valid
  }
};

// Setup multer untuk upload file
const upload = multer({ storage, fileFilter });

module.exports = upload;
