
const express = require('express');
const router = express.Router();
const productController = require('../controllers/ProductController');
const upload = require('../config/upload');

router.get('/', productController.index);
router.get('/find/:id', productController.show);
router.post('/create/', upload.single('image'), productController.store);
router.put('/update/:id', upload.single('image'), productController.update);
router.delete('/delete/:id', productController.destroy);

module.exports = router;
