const express = require('express');
const { registerUser } = require('../controller/userController.JS');
const router = express.Router();


router.post('/register', registerUser);