
const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');
const upload = require('../config/upload');

router.get('/', UserController.index);
router.get('/find/:id', UserController.show);
router.post('/create/', upload.single('image'), UserController.store);
router.put('/update/:id', upload.single('image'), UserController.update);
router.delete('/delete/:id', UserController.destroy);

module.exports = router;