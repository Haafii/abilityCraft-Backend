const express = require('express');
const { registerUser } = require('../controller/usercONTROLLER.JS');
const { loginUser } = require('../controller/usercONTROLLER.JS');
const { currentUser } = require('../controller/usercONTROLLER.JS');
const validateToken = require('../middleware/validateTokenHandler');
const router = express.Router();


router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/current', validateToken, currentUser);

module.exports = router;