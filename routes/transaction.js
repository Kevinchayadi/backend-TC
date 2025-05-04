
const express = require('express');
const router = express.Router();
const TransactionController = require('../controllers/TransactionController');

router.get('/', TransactionController.index);
router.get('/find/:id', TransactionController.show);
router.post('/create/', TransactionController.store);
router.put('/update/:id', TransactionController.update);
router.delete('/delete/:id', TransactionController.destroy);

module.exports = router;