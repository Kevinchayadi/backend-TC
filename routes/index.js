const express = require('express');
const path = require('path');
const fs = require('fs');

const router = express.Router();

router.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'login.html'));
});


const routeFiles = fs.readdirSync(__dirname).filter(file => file !== 'index.js' && file.endsWith('.js'));

routeFiles.forEach(file => {
  const routeName = file.replace('.js', '');
  const routeModule = require(path.join(__dirname, file));
  router.use(`/${routeName}`, routeModule);
});

module.exports = router;
