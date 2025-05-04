const express = require('express');
const router = express.Router();
const ArticelController = require('../controllers/ArticelController');
const upload = require('../config/upload');

router.get('/', ArticelController.index);
router.get('/:id', ArticelController.show);
router.post('/create/', upload.single('image'), ArticelController.store);
router.put('/:id', upload.single('image'), ArticelController.update);
router.delete('/:id', ArticelController.destroy);

module.exports = router;
