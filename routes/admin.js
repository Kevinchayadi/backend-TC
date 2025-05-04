
const express = require('express');
const router = express.Router();
const AdminController = require('../controllers/AdminController');
const upload = require('../config/upload')

router.get('/', AdminController.index);
router.get('/find/:id', AdminController.show);
router.post('/create/', upload.single('image'), AdminController.store);
router.put('/update/:id', upload.single('image'), AdminController.update);
router.delete('/delete/:id', AdminController.destroy);

module.exports = router;
