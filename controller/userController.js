const asyncHandler = require('express-async-handler');
const User = require('../models/userModel');
const bcrypt = require('bcrypt');

const registerUser = asyncHandler(async (req, res) => {
    res.status(201).send('User registered');
});


module.exports = { registerUser }