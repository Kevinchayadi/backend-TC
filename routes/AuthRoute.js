const express = require('express');
const router = express.Router();

// Route untuk autentikasi
router.get('/auth', (req, res) => {
    res.send('Autentikasi pengguna');
});

module.exports = router;