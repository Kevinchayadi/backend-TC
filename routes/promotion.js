
const express = require('express');
const router = express.Router();
const PromotionController = require('../controllers/PromotionController');
const upload = require('../config/upload');

router.get('/', PromotionController.index);
router.get('/find/:id', PromotionController.show);
router.post('/create/', upload.single('image'), PromotionController.store);
router.put('/update/:id', upload.single('image'), PromotionController.update);
router.delete('/delete/:id', PromotionController.destroy);

module.exports = router;