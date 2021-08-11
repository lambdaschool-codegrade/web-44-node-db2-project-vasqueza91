// DO YOUR MAGIC
const express = require('express');
const router = express.Router();



router.get('/api/cars', (req, res) => {
    res.send('Welcome to Cars');
});

module.exports = router;