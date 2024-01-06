const express = require('express');
const router = express.Router();
const contactController = require('../controller/ContactController');

router.post('/submit', contactController.submitContactDetails);

module.exports = router;
