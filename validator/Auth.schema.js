const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const path = require('path')

router.get('/signup' , (req,res) => {
    res.sendFile(path.join(__dirname ,'../signup.html'))
})

router.post('/signup' , AuthController.signup)
// Route untuk autentikasi
router.get('/auth', (req, res) => {
    res.send('Autentikasi pengguna');
});

module.exports = router;