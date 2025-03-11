const express = require('express');
const {register, login} = require('../controllers/authControllers');

const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

module.exports = router;