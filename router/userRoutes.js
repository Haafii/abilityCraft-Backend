const express = require('express');
const { registerUser, loginUser, currentUser } = require('../controller/userController.JS');
const router = express.Router();


router.post('/register', registerUser);
router.get('login', loginUser)
router.get('/current', currentUser);

module.exports = router;