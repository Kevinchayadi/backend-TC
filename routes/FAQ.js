
const express = require('express');
const router = express.Router();
const FAQController = require('../controllers/FAQController');

router.get('/', FAQController.index);
router.get('/find/:id', FAQController.show);
router.post('/create/', FAQController.store);
router.put('/update/:id', FAQController.update);
router.delete('/delete/:id', FAQController.destroy);

module.exports = router;