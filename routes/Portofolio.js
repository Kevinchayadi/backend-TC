
const express = require('express');
const router = express.Router();
const PortofolioController = require('../controllers/PortofolioController');
const upload = require('../config/upload');

router.get('/', PortofolioController.index);
router.get('/find/:id', PortofolioController.show);
router.post('/create/', upload.single('image'), PortofolioController.store);
router.put('/update/:id', upload.single('image'), PortofolioController.update);
router.delete('/delete/:id', PortofolioController.destroy);

module.exports = router;